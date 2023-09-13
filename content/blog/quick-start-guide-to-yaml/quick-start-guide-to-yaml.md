---
title: Quick-start guide to using Yaml
description: Learn the basics of writing serialisable data into Yaml files
date: 2021-04-07
tags:
  - guide
  - data-storage
  - yaml
---

## Definitions

<details>
  <summary>What is a file really?</summary>

A <strong>file</strong> is and object on a computer that is used to store data or information.

There are many types of files, recognisable by their extension (ie. `.doc`, `.pdf`, `.jpg`).
Different file types are optimised for different tasks, like storing video, audio, text, configurations or computer instructions (code).

</details>

<details>
  <summary>What is a markup language?</summary>

A <strong>markup up language</strong> is a system of writing content so that it’s structure conveys meaning.

Yaml is a data serialization language and not technically a markup language though it functions a lot like one.

Other markup languages you might be familiar with are HTML, XML and JSON.

When you compare Yaml structure to other similar systems Yaml requires considerably less content or "decoration" to carry the same amount of information, but is less resilient regarding spacing and formatting as a result.

<div class="u-responsive-table-container">
<table>
  <thead>
    <tr>
      <th align="left">Yaml</th>
      <th align="left">XML</th>
      <th align="left">JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align:top">

```yml
People:
  - name: Bob
    age: 30
    address: Wicklow, Ireland
```

      </td>
      <td style="vertical-align:top">

```xml
<People>
  <Person>
    <name>Bob</name>
    <age>30</age>
    <address>Wicklow, Ireland</address>
  </Person>
</People>
```

      </td>
      <td style="vertical-align:top">

```json
{
  "People": [
    {
      "name": "Bob",
      "age": 30,
      "address": "Wicklow, Ireland
    }
  ]
}
```

      </td>
    </tr>

  </tbody>
</table>
</div>
</details>

## Yaml

Yaml is a markup like language (used in the `.yaml` file type) that aims to make data portable in a way that is easy to read, write and edit by humans _and_ computers.

A Yaml document contains fields to store different types of data and aims to use compact formats to describe more complex data structures (eg. lists of items and maps).

## Yaml structure

The three dashes <code>---</code> are used to signal the start and end of a Yaml document.

You structure a YAML document with white-spaces. This means indentation (spaces) and new lines are crucial to a correctly structured Yaml document (always use spaces not tabs). Unless otherwise indicated, newlines indicate the end of a field.

## Key value pairs

The simplest and most common field you’ll see in a `.yaml` file is a key-value pair.

Key-value pairs are used for labelling (the key) single pieces of data (the value), like a piece of text or a number.

```yml
---
# Example of `key: value` pair
# Note that a space after the colon is mandatory
name: Joan smith
age: 32
---
```

<details>
  <summary markdown="span">What is the value data of writing like this?</summary>

A computer can read and use structured data written a lot easier than the unstructured data, for example see the following:

```txt
It's Joan Smiths 33rd birthday is tomorrow.
```

Again, the key aim of Yaml is to be portable, meaning that it can be easily imported, understood by multiple programs and in programming languages.

</details>

## Blocks of text

To store a literal block of text using the pipe (`|`) character. New lines are preserved within the block.

```yml
literal_block: |
  This entire block of text will be the value of the 'literal_block' key,
  with line breaks being preserved.

  The literal continues until de-dented, and the leading indentation is
  stripped.
```

## Comments

Comments begin with a pound or hash sign (`#`). A comment is a programmer-readable explanation or annotation of data. It is ignored by the application.

```yml
# This is a full line comment, humans only... 🤖
key: value
```

## Lists

List or arrays are lines that begin at the same indentation level, starting with a dash followed by a space. A list groups multiple values into the same field.

```yml
# Here is a list of names grouped into a "name" field
names:
  - "Jane"
  - "John"
  - "Jill"
```

or

```yml
# This is an alternative format to achieve the same thing.
# Arrays are often represented using square brackets []
names: ["Jane", "John", "Jill"]
```

## Dictionary List

A dictionary groups more complex values into a single field.

```yml
# This is a collection of two link fields
# Each associated with its own label and url fields
links:
  - label: "Home"
    url: "./home"
  - label: "About"
    url: "/about"
```
