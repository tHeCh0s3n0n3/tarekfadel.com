---
author: Tarek Fadel
pubDatetime: 2023-08-29
title: Automating Static Site Deployment
postSlug: automating-static-site-deployment
featured: true
draft: true
tags:
  - automation
  - learning
  - development
ogImage: ""
description: |
  Automating deployment of a static site securely is a challenge, here's how I accomplished it.
---

I wanted to find a way to **securely** automate deployment of my shiny new statically
generated site. I've managed to do it and sharing it here to help myself and others
in the future.

## Table of contents

## The problem

You just made yourself a pretty new statically generated site using something like
[Astro](https://astro.build) and you want to deploy it automatically after pushing
it to Git (you do have it in source control _riiiiight_?).

You could easily set up a GitHub action to SSH into your server and deploy it, but
being security minded, the principal of Least Privilege means that your webserver
is locked down and nobody but the webserver's user can write to the directory.

This is exactly the situation I found myself in. I managed to solve it in a (IMHO)
creative way without compromising security or efficiency.

## The solution

### High level solution

THe solution I cobbled together is as follows:

- Create a dedicated Git branch for deployment
- Create a new unprivileged user
- Create an SSH key for the new user
- Restrict the new SSH key to only be able to call `rrsync` (yes, that's a double "r")
- Add secrets to the GitHub repository
  - Webserver Hostname
  - New user's username
  - SSH Key
- Add a GitHub action which does the following:
  - Trigger on push to the deploy branch
  - Checkout the deploy branch
  - Build the application
  - Create an `~/.ssh/id_rsa` file
  - Write to the SSH Key secret to the `id_rsa` file
  - Add the host's information to `~/.ssh/known_hosts`
  - Start the SSH agent with the new key
  - `rsync` the generated files to the server
- Create a shell script which
  - Changes the ownership of all files in the directory
    where the files are pushed to. The owner should be the webserver's user (ex: `www-data` on Ubuntu)
  - `rsync`s the files to the directory being served
- Create a `systemd` timer and service
  - The service should call the shell script created above
  - The timer should run on a schedule (think `cron`, but make it `systemd`)

With all that done, everything is now set up and a push to the deploy branch results in my website being updated within 10 minutes.
