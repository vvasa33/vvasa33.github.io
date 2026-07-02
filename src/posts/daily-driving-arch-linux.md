---
title: "Daily Driving Arch Linux "
date: "2026-06-21"
tag: "Analysis"
color: "bg-cmyk-cyan"
excerpt: "What's it like to daily drive a niche operating system? Find out here!!!"
slug: "daily-driving-arch-linux"
---

Yes, it's true! Last summer, I made the (brave) decision of installing Arch Linux as a dual-boot onto my computer along with Windows. I then ran this setup for around 6-7 months (June - December) before I finally had enough of it. 

## Previous Experiences with Linux

Up until this point, I'd been working with a lot of Windows (notoriously user-friendly) and Ubuntu (a bit harder, but still definitely user-friendly). I'd worked with other Linux systems before, like Pop!OS or Linux Mint, but these systems are generally meant to be used with a GUI and have all the features that something like Windows or MacOS would have. I wanted a real challenge, something that I would have to build from the start.

You can probably tell that I was a bit of a Linux noob. I could *probably* live inside an Ubuntu terminal if you made me, but it would be a difficult time. Another issue was that I was just too professionally inclined in Linux. Not that I was a professional in the first place, but a lot of the commands I knew and the way I did things in Linux were meant for things like configuring networking, working with utilities, etc. I never really used Linux for "fun" stuff, which made it kind of hard for me to see Ubuntu or similar operating systems as systems I could daily drive and feel happy with.

One fateful day, while I was casually browsing YouTube looking for something to watch while eating, I stumbled on a video talking about, ironically, why you **shouldn't** use Arch Linux as a daily driver (foreshadowing...). I watched this video fully, and found it kind of dumb. A lot of the points he made were focused on how difficult it was to use Arch, how everything had to be done manually, how you even had to install your own GUI! To me, though, this just looked like the definition of ultra-customizability. You get to start from a clean Arch install, and build up the system to be whatever you wanted it to look like. It was the definition of the *perfect* operating system for me. 

## Discovering The Beauty of Arch

Those videos were cool, but they weren't really enough for me to feel motivated to switch from Windows. I was totally fine with my current setup, which was a Windows 11 install with Ubuntu installed on my WSL. My setup was really functional, but what I didn't realize was that it just wasn't very... good-looking. It was just a basic Windows setup, no wallpaper engine for stunning visuals. 

Then, I saw something that changed the way I looked at desktop setups.

It was a beautiful setup. A cotton candy night sky made up the background (which I later found out to be from the anime movie "Your Name"). The "taskbar" was at the top and was fully customized, with custom icons for things like the Wi-Fi and sound, and the text was customized to be JetBrains Mono. The widgets on the desktop looked nothing like what Windows setups looked like. The way that screens opened up and almost "tiled" on the screen looked nothing like I'd ever seen. I was simply in awe, I think it was the quickest I'd ever opened the comments section.

The original poster left these things called "dotfiles," a set of files that could exactly replicate his setup. Reading through the GitHub repository showed something I wasn't expecting: he was using Arch Linux. What??? Since when did Arch allow for stuff like this? All of the videos I saw showcased Arch as this "dangerous" environment where all you could ever do was cd in between directories and use vi like a caveman (side note: I actually use neovim to write these articles). This post was so much cooler than those videos, and unsurprisingly the rest of the comments sections were praising everything about this beauty of a system.

Clicking into the post redirected me to Reddit, where I then navigated to a reddit with quite the unique name: [unixporn](https://www.reddit.com/r/unixporn/). It's probably one of the coolest reddits out there, showcasing some of the coolest linux setups out there. There was stuff from Windows 95-esque setups to beautiful animated desktops with elements that hooked directly into the applications on the desktop. Just scrolling through this reddit gave me all sorts of ideas for how I wanted my own setup to look like, to the point where I even started drawing on paper what I thought the ideal setup of my taskbar and widgets would look like on my system.

## Installing Arch

With my newfound inspiration, I got the immediate urge to install Arch. Excitedly, I borrowed my dad's USB, etched the Arch ISO in, and loaded up the live boot like I'd done in the past. 

What I saw on my screen was nothing like any other ISO's I had booted in the past.

There was no GUI. No window manager, no taskbar, and no cool wallpapers in sight. All I saw was a blank screen, with white text in the top left corner of my screen with a root zsh shell open. Changing directories and looking around showed that I was in my live boot, and I quickly realized that I was missing a /mnt folder, meaning that... I'd need to mount my own ISO. I had no clue how to do this, seeing as though I was a newbie to Arch, so I quickly consulted the Internet.

If you, the reader, have ever used Arch, you probably know of the archinstall script, which functions as a nice tool to mount your ISO to a partition and set up the basics like Wi-Fi, Bluetooth, etc. Unfortunately, to do this, I needed to set up Wi-Fi first (I had an ethernet jack, but I was too lazy to get an ethernet cable). After following the guide to setting up the iwctl utility, I ultimately forgot about the archinstall and kept going through with the manual install guide on the Arch website. 

To put it bluntly, this was a very painful process. A lot of commands to run, things to keep track of, figuring out how to mount the system, etc. When there isn't an automated script determining these things for you, it's awfully hard to determine what the best thing to do in a situation is, and I found myself turning to Stack Overflow every once in a while when things got very dicey. Commands wouldn't run at times, they would error out, and the debugging process involved messing with systemd, stuff that was really scary to mess with. The mounting process was even scarier. One mistake, and I could accidentally reformat my Windows install and mess up my whole system. 

Finally, after around 5-6 hours of deep debugging and figuring out how things would work (I took breaks in between, don't worry), I rebooted my system to a new GRUB entry, and a simple terminal login entry when I booted into Arch. It was one of the best feelings of my life, all of that hard work finally culminating into a simple operating system that I could now cd through as freely as I wanted to. It was like a rite of passage.

## Setting Up A GUI

I vividly remember sending some pictures of my new Arch setup to friends, just for them to ask why I was so proud of getting a shell running (no hate to them, they didn't know I was using Arch, btw). That's when I realized that I'd basically done nothing in my quest to achieve an aesthetic setup. As far as it was concerned, all I did was install an OS. I couldn't actually do any meaningful work in here without a GUI, and more importantly a browser. So, I took back to unixporn to see how people were building their setups out. 

In the titles of each post in square brackets were the names of what window managers were being used. As I scrolled, I kept seeing one name that I had seen in the past: Hyprland. This was what the first post I'd seen was using, and it looked beautiful. Taking a look at its [wiki](https://hypr.land/) showed that this was a bleeding-edge tilting window manager. It used keybinds to manipulate windows in a tiling fashion, meaning that instead of using your cursor to open and close windows, you could use solely your keyboard. It was a lot like vim, which I'm a fiend for. 

I headed into the install guide, installed the 20 packages that it required (it's bleeding-edge, so it required a lot of packages and the rolling-release style that Arch inherits). This install process was actually fairly easy compared to installing Arch itself, and after fixing up some dependency issues that the AUR was giving me, I was booted into a base version of Hyprland.

It was amazing.

I played with *everything*. Setting up keybinds was so much fun and I eventually got into the rhythm of using them to open and close windows. I quickly downloaded Vivaldi, a firefox-based browser known within the unixporn community to be perfect for customizability, and set up configuration files to make it *aesthetic*. I got to work on my own configurations (dotfiles), setting up a nice wallpaper and a new taskbar (called Waybar) complete with a pomodoro timer that I actually found myself using a lot. I set it up so that it would prevent launching new applications while it was in its "locked" state. 

This was the point where I started showing people my system. A lot of people thought it was really cool, and I was so proud to say that I had built up most of it from scratch (minus the wallpaper and some configuration settings I borrowed from other setups). Things were amazing, a lot of people thought the aesthetic was a lot better than Windows and some of my friends even tried to run their own versions of Arch to do something similar (although I'm not sure if they ever got to a fully functioning setup). 

## Experiences with Arch

So after getting the setup to a point where I liked it, I used my computer a **lot** more than I usually did. My productivity was a lot higher since not only did I have a system-wide locker built into my computer, but I also had the keyboard-based bindings built not only into my text editing software, but into my window manager itself! Compared to my friends who used Windows or MacOS (eww, normal people), I could complete tasks much quicker because I had a system custom-built for me. However, this experience didn't last very long.

About a couple of months in, I started noticing issues. Arch is a rolling-release distro, meaning that it's quite normal for people to run a system-wide update almost every day to update packages to their bleeding-edge night versions. I did something similar using a cronjob. What's nice is that these packages update in the background due to the way that Arch works, meaning that you don't need to reboot your computer very often (unless there were major changes to the OS itself pushed downstream by the Arch repo). 

However, things started to break quickly. At first, it was relatively small. I'd open my computer to an error stating that configuration files for my Waybar weren't set up properly. A new update to the Waybar meant that the configuration files had to be set up in a different way, so I had to update those quickly. Not a big deal. Small things kept piling up, and eventually I got kind of bored of fixing them constantly. Errors with configurations, weird things constantly breaking. I could live with this though, it wasn't really affecting my work and you would have to trigger things in a certain way for them to even pop up.

Then my sound broke.

Yeah, that's right. After my daily update, my sound drivers suddenly stopped working. My Waybar totally broke and I couldn't tune volume, my keybinds for volume up and down broke, and videos couldn't play with sound at all. In addition, the videos themselves took forever to render. I tried everything. I looked online to see some other people having the same issue, and they had some commands they ran. I'd run them, get errors, try to debug them, the cycle kept going. Every issue I fixed would cause a new issue, and that issue would have even more issues, and it just became a never-ending rabbit hole of fixing issues. For what? So that I could listen to Spotify while I worked.

At this point, it had become really problematic. I couldn't watch YouTube videos, listen to Spotify, use such a basic part of my computer. At this point, I had started to hate my own system. Things kept breaking, and at one point my Hyprland itself broke. That was a pain to fix. It was stuff that I could have fixed if I was on top of things, but it just becomes a pain at some point when the first thing you have to do when entering your setup was to fix new issues that just kept coming up because of new updates. What I once thought was super cool bleeding-edge stuff had finally caught up to me.

## Advice

Another thing I forgot to mention is that Arch is pretty bad with compatibility. A lot of things are built for Windows and MacOS, so you probably run out of luck with Linux. If you're on something popular like Ubuntu, you're lucky enough to have a large group of dedicated people, specifically professionals who use Ubuntu for their daily jobs, to help port things or at least make them work. However, with Arch, you're stuck. You'll probably have to be the one who's doing all of the hard work porting an application from Ubuntu to Arch. That's fine, but when it becomes almost a lot of the apps that you use on a daily basis, it's painful. You'll realize that when you realize you have to edit configuration files for the operating system and install Cursor manually. 

My advice? Arch Linux is great to practice with and show off, but painful to daily drive. If you're willing to deal with the issues like I did for a short amount of time, you'll be fine. But if you hate constantly working on your system, then Arch isn't for you. If you're looking for aesthetics, use another operating system and use other window managers like i3 or sway. They might not be as bleeding-edge or cool as Hyprland, but they get the job done and can be customized as well! 

If you're getting into Arch Linux, I would recommend doing it the hard way and installing it without the archinstall script. You'll learn a lot, it taught me a lot about how systems work in general and what's going on when an operating system is first being initialized (since you're the one initializing it). The archinstall script is helpful if you're stuck, but you're not getting the true Arch experience without it. If you do use it, that's fine, but people will probably tell you that you're larping Arch (and they would be right). 

So yeah, that was my Arch Linux experience. After some time, I decided to switch back to my boring Windows setup. Although it wasn't as cool as my Arch setup, it was a lot more comfortable and I felt so relieved not having to work with issues all the time. But in my heart, my first Arch Linux setup will always be my most favorite operating system. :)

So yeah, that's my thoughts on Arch! I'll probably write about some more specifics about this someday, but for right now that'll be it. Thank you for reading this, and have a great rest of your day!