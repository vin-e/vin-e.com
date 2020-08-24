---
title: Kotlin Reflection
---

# Reflecting on class enum

In our kotlin code base there are enum's defined with a custom label that is displayed in the UI. It was done via this example:

``` kotlin
enum class GameType(val label: String) {
  tic("Tic"),
  tac("tac"),
  unknown("unknown")
}
```

We wanted to map this to using `GameType.values()` but label is not available. The boss man was able to get the value using Java reflection:

``` kotlin
data class EnumDto(val name: String, val label: String, val family: EnumDto? = null)

fun <K : Enum<K>> toEnumDto(values: Array<K>): List<EnumDto> {
    return values.mapNotNull {
        when (val name = it.name) {
            "unknown" -> null
            else -> {
                val label = it.javaClass.getMethod("getLabel").invoke(it) as String
                EnumDto(name, label)
            }
        }
    }
}
```