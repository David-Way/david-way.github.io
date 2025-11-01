---
title: "hushup CLI"
subTitle: A node command line tool to quickly assess and kill processes with open ports.
description: A node command line tool to quickly assess and kill processes with open ports.
publish: true
gridShape: tall
order: 4
thumbnail: hushup-cli/images/hushup-cli.png
date: 2021-10-03
tags:
  - open source
  - CLI
  - node.js
  - ports
---

You might be familiar with the obnoxious `EADDRINUSE` port in-use message. It's commonly encountered when frantically context-switching between projects. You may be trying to spin up a project up for that Sprint Demo in 15 minutes or dusting off some long dormant code you haven't looked at in a while. Either way, you are eager to get moving, and now you have a side quest.

Lucky for you, a good friend of mine built a fantastic app that helps with this problem, [Port Manager](https://portmanager.app/). Port Managers' most helpful feature is that it allows you to identify and free up any in-use ports in a few clicks. I use it frequently, and I encourage you to try it yourself.

However, I'm not always working on a Mac or even a machine with a GUI, so when I run into this problem in those cases, I am often disappointed to remember that [Port Manager](https://portmanager.app/) is only currently available on Mac (macOS Sierra 10.12+).

I was looking for a project to work on for [hacktoberfest](https://hacktoberfest.com/) without adding to the noise OSS maintainers are frequently exposed to during this time of year so I decided to create something new to try and solve my own problem.

## Needs

These were the needs I identified to measure the success of my design against.

1. As **a developer** I need to be able to **list all currently open ports and associated information** so that **I can identify what they are being used for**.
2. As **a developer** I need to be able to **kill one or more of those ports quickly and safely** so that I **can go back to writing code**.

## My solution

You can already use many commands to get a list of the Process IDs (PIDs) for running processes with open ports and commands for killing a process when given a specific process ID. The problem with these commands is that they are mildly anxiety-inducing (if you misuse or mistype them), clunky (many unintuitive flags are required), and you tend not to use them frequently enough to commit them to memory.

I wanted to build a simple solution that abstracts away the intricacies of this process, minimize the cognitive load or research required and allow the user to achieve their task quickly and safely.

I chose to use a command line interface (CLI) for this solution as it is a fast and efficient way to handle these types of interactions, as it requires minimal keystrokes and system resources. CLI interfaces are also the preferred UI mode for most programmers, as using a keyboard and keyboard shortcuts drastically increases productivity when performing familiar or repetitive tasks.

## Usage

If you have Node.js installed (v16+), the **hushup** command can be executed (without installing) using `npx hushup` _or_ alternatively, it can be installed locally `npm i -g hushup` and run locally `npm hushup`.

Running the hushup command returns an indexed table of currently open files with running processes.

The tool then prompts the user and accepts the index of the process they want to stop. Once that process has been stopped the tool then clears the screen and lists the remaining running options. Once the desired number of processes have been silenced, the user can use the `q` key to exit the program.

<div class="u-bleed-container:large">

<a href="https://github.com/David-Way/hush?tab=readme-ov-file#hushup">
{% image "./images/hushup-cli-sm.png", "hushup cli tool displaying a table of currently open ports and an index that can be used to close them." %}
</a>

</div>

Color was used to help reinforce the association between the most important pieces of the UI, the command input and the target index of the desired process.

## Results

This results in a responsive and powerful experience that can quickly get the user back on track. Users only need to remember one (shorter command) and they are guided through the rest of the process reducing cognitive load and anxiety.

<a class="u-type:body-lead" href="https://www.npmjs.com/package/hushup">Try the hushup cli tool yourself</a>.

<div class="u-bleed-container:default u-mt:08">
<div class="l-flex-container l-flex-container--spacing:08" >

![License](https://img.shields.io/github/license/David-Way/hush?style=flat)

![Version](https://img.shields.io/npm/v/hushup?style=flat)

![Code size](https://img.shields.io/github/languages/code-size/David-Way/hush?style=flat)

![size](https://img.shields.io/github/issues-raw/David-Way/hush?style=flat)

[![Known Vulnerabilities](https://snyk.io/test/github/David-Way/hush/badge.svg)](https://snyk.io/test/github/David-way/hush)

</div>
</div>
