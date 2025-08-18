---
"canzatrade": patch
"frontend": patch
"processor": patch
---

- `EventBus` moved to a separate package `@canzatrade/event-bus`
- Subscription to `EventBus` events moved in one place, inside bot `Processor`
