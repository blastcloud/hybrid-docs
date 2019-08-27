---
lang: en-US
title: Helpers | Hybrid
---

# Helpers

The following helper methods can be used in addition to `Expectations` and assertions for any custom logic or checks that need to be made.

### getHistory(?int $index, $subIndex = null)

To retrieve the client’s raw history, this method can be used.

```php
$history = $this->hybrid->getHistory();
// Returns the entire history array
```

The shape of the history array Hybrid creates is is as follows:

```php
$history = [
    [
        "request"  => Symfony\Contracts\HttpClient\ResponseInterface object
        "response" => Symfony\Component\HttpClient\Response\MockResponse object,
        "options"  => array,
        "errors"   => string or null
    ],
    // ...
];
```

Individual indexes and sub-indexes of the history can also be requested directly.

```php
$second = $this->hybrid->getHistory(1);
/**
* [
*   'request'  => object
*   'response' => object
*   'options'  => array
*   'errors'   => array
* ]
*/

$options = $this->hybrid->getHistory(4, 'options');
/**
* [
*   'stream' => true,
*   // ...
* ]
*/
```

### historyCount()

Retrieve the total number of requests that were made on the client.

```php
$this->client->get('/first');
$this->client->delete('/second');

echo $this->hybrid->historyCount();
// 2
```

### queueCount()

Retrieve the total number of response items in the mock handler's queue.

````php
echo $this->hybrid->queueCount();
// 0

$this->hybrid->queueMany(new MockResponse(), 6);

echo $this->hybrid->queueCount();
// 6
```