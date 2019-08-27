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

This trait wires up a class variable named `hybrid`. Inside that object the necessary history and mock handlers for HttpClient are instantiated and saved. You can completely customize the `Client` object however you like in two different ways.

### getClient(array $options = [])

The `getClient` method returns a new instance of the HttpClient `Client` class and adds any options you like to it’s constructor. Adding extra options is **not** required.

```php
$client = $this->hybrid->getClient([
    "base_uri" => "http://some-url.com/api/v2",
    // ... Any other configurations
]);
```

### getHandlerStack()

If you’d rather create your own `Client` instance, you can instead return the handler stack required to mock responses and add it directly to your client.

```php
$client = new Client([
    //... Some configs
    "handler" => $this->guzzler->getHandlerStack()
]);
```

You can also add your own handlers to the stack, if you’d like.

```php
$stack = $this->guzzler->getHandlerStack();
$stack->push(new SomeOtherHandler());

$client = new Client([
    "handler" => $stack
]);
```