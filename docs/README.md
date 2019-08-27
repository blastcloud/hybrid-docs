---
title: Hybrid | Official Documentation
lang: en-US
footer: MIT Licensed | Copyright © 2019-present Adam Kelso
layout: HomeLayout
navbar: false
---


Supercharge your app with a testing library specifically for Symfony/HttpClient. Hybrid covers the process of setting up a mock handler, recording history of requests, and provides several convenience methods for creating expectations and assertions on that history.

## Example Usage

```php
<?php

use BlastCloud\Hybrid\UsesHybrid;
use GuzzleHttp\Client;

class SomeTest extends TestCase
{
    use UsesHybrid;

    public $classToTest;

    public function setUp(): void
    {
        parent::setUp();

        $client = $this->hybrid->getClient([
            /* Any configs for a client */
            "base_uri" => "https://example.com/api"
        ]);

        // You can then inject this client object into your code or IOC container.
        $this->classToTest = new ClassToTest($client);
    }

    public function testSomethingWithExpectations()
    {
        $this->hybrid->expects($this->once())
            ->post("/some-url")
            ->withHeader("X-Authorization", "some-key")
            ->willRespond(new MockResponse(201));

        $this->classToTest->someMethod();
    }

    public function testSomethingWithAssertions()
    {
        $this->Hybrid->queueResponse(
            new MockResponse(204),
            new \Exception("Some message"),
            // any needed responses to return from the client.
        );

        $this->classToTest->someMethod();
        // ... Some other number of calls

        $this->Hybrid->assertAll(function ($expect) {
            return $expect->withHeader("Authorization", "some-key");
        });
    }
}
```

---

<p align="center">MIT Licensed | Copyright © 2019-present Adam Kelso</p>
