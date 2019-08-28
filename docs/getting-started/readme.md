---
lang: en-US
title: Getting Started | Hybrid
---

# Getting Started

## Requirements

1. PHP 7.1+
2. Symfony\HttpClient
3. PHPUnit 7 or 8

## Installation

Add the dependency to your *composer.json* file.

```bash
composer require --dev --prefer-dist blastcloud/hybrid
```

Add the `BlastCloud\Hybrid\UsesHybrid` trait to your test class.

```php
use BlastCloud\Hybrid\UsesHybrid;

class SomeTest extends TestCase
{
    use UsesHybrid;
```

This trait wires up a class variable named `hybrid`. Inside that object the necessary history and mock handlers for HttpClient are instantiated and saved. You can customize the `Client` object however you like by passing in any options you would pass to a normal `MockHttpClient` in the `getClient()` method.

### getClient(array $options = [])

The `getClient` method returns a new instance of the `HttpClient` class and adds any options you like to it’s constructor. Adding extra options is **not** required.

```php
$client = $this->hybrid->getClient([
    "base_uri" => "http://some-url.com/api/v2",
    // ... Any other configurations
]);
```

## Custom Engine Name

Hybrid allows you to customize the variable name of the engine, if you prefer to not use "hybrid". To use a custom name, add a constant to the class called `ENGINE_NAME` with the value set to the variable name you'd prefer.

```php
use BlastCloud\Hybrid\UsesHybrid;

class SomeTest extends TestCase
{
    use UsesHybrid;
    
    // Here we define what we want the engine name to be.
    const ENGINE_NAME = 'engine';

    public function testSomething()
    {
        // Here, $this->hybrid has been renamed
        // to $this->engine
        $this->engine->expects($this->once())
            ->get('/some/api/url');
    }

    // ...
}
```

The main benefit of using a custom engine name is to abstract as much code as possible. If you ever decide to move away from Hybrid to another Chassis based library, only the trait name needs to change.