---
title: "Building Software From the Ground-Up"
date: "2026-06-10"
tag: "Development"
color: "bg-highlighter-green"
excerpt: "Building software from scratch can be a lot more difficult than you think. In this article, we go over the mistakes I made when I first started."
slug: "building-software-from-the-ground-up"
---

In September, I became the CTO of a Hardware-Software SaaS + HaaS company, SenseGuard (you can read more about how we started out in [this post](/blog/to-start-a-startup)). 

Now, I'd consider myself a pretty good developer. I've been coding since middle school, and built some pretty cool websites and backend systems in my high school days. I've also worked on hardware stuff through the form of FTC robotics. In short, I *thought* I had the skills to help build our software. Like, how hard could it be? Just make a database, connect an API, build a beautiful UI and boom! The customers will be knocking any time now... 

## My Past with System Design

So I have a confession to make. 

Projects that I'd built in the past for hackathons usually had a pretty simple formula. Like I mentioned above, our system design was basically just the following things:

1. A backend that did all of the processing. This was usually a really simple API that we just built using Express or maybe FastAPI if we were working in python.
2. A frontend that we just built using tailwindcss, since I really liked the philosophy of putting decorators into React code itself.
3. A database, usually just Postgres, that held all of our information. In most cases, we probably could've just had a list in our code itself since we held so little data, but we wanted to build out the database so that it would be cooler to show to the judges.

Honestly, this worked! Judges loved the supposed complexity of what we built (reminder: we're in like 2019-2020 territory, anything with a bit more complexity than an HTML app was cool back then). This was great and all, but there was a catch - we never built for scale. None of these apps were even meant to have users, they were meant to last through the judging session before we killed all of the processes and shelved the project, never to be seen again. I'm sure that if you spun up one of these projects, they would die instantly to like, 10 users connecting at the same time.

## Starting from Scratch

Alright, let's come back to September of 2025. Now that we were in the Hatchery, we realized that we actually had to start, y'know, building stuff. As we sat in our chairs, I realized something that, typing out, feels very stupid to say.

Where do I even start?

I mean, I could've gone with the design style that I used to use. It would've worked, technically... for the one user that gets to access it before the whole system falls apart. As I talked with my partner, I realized that there were even more things that I had to integrate with. As a reminder, SenseGuard is both a hardware and software company, which meant that my partner also had his own software that integrated with our hardware products that I needed to connect to. Unlike a lot of other SaaS startups at the time, which had a pretty standardized setup, we were much different and needed to architect a custom solution that could optimally send data from our sensors to our customers in real time.

***That's a lot easier said than done.***

### So, What Now?

Even though I had just found out that I had no clue what I was doing, I didn't have much of a choice other than to pursue the challenge and get *something* working. This began probably what I didn't expect to be one of the most exciting parts of building SenseGuard, our original system design.

Sitting in the Hatchery, I vividly remember spending over 3 hours in a conversation with ChatGPT determining what we had to build. In my conversations, I asked it so many times to **focus on scalability** even if it meant making the architecture difficult to work with. It eventually came up with some really insane ideas. The software implementation it had had us building everything with AWS, highly architected APIs using NestJS, AWS cores that were built to handle millions of sensor pings at once, Supabase for data storage, rounded out with Kubernetes (k8s) and Docker to round things out. To put it bluntly, this was a system design built for millions of readings at once. Looking back, I think I would've genuinely quit working on the business if I was dumb enough to believe what ChatGPT said and try to actually build this.

But... I was actually kind of on-board at one point. Everything looked... right. And to be honest, it was. What ChatGPT had said was true, it's just that building a system like that from the start is difficult. Even with someone who had a lot of experience building full-stack applications, it would've been wayyyyy too much work, even with my partner (and he had his own issues to worry about with hardware). 

### Simplification

I think the moment I realized that things were going overkill was when it wanted me to build a highly-resilient Redis caching system (the true last straw was when it wanted to build an Apache Kafka instance into our data aggregation tool to account for future systems we build). If you're a software developer, you're probably laughing at how crazy this all sounds right now. We didn't even have a single reading coming through yet, and ChatGPT already wanted me building caching systems. Heck, we didn't even have a single user yet!

I'd consider this the most important move I made in the company - I went back to the basics. I thought back to everything that I had worked on previously. What if I just took that style I had built up, and then reformatted it to what I was currently working on, and then made it more scalable? In my mind, this felt a bit ***too*** simple. After all, we had so many components we had to develop, and I just didn't think it could work. 

So the most important part of my startup's journey happened (on the software side, at least). I sat down and *really* thought about it. What parts did we need, how would data be sent, all of that stuff. Slowly, as I assessed what we needed and didn't, certain choices became obvious. Choices that were simple, but could be built on in the future. Choices that, if they were wrong, would be easy to tear apart and start fresh. Suddenly, it started to make a lot more sense. 

## Building From the Ground Up

So far, we haven't really learned much other than it's not a good idea to blindly trust whatever an LLM tells you to do (kind of obvious looking back, but it's an easy trap to fall into). My whole anecdote was to show that it's a lot more difficult to develop software from scratch than what you might find at other jobs. Startups are interesting like that.

What's different is that you don't already start out with a developed system. A lot of internships or jobs most people enter have systems that were already built for them. They enter, get onboarded, and then typically just add features, fix bugs, write Jira tickets, whatever else a real job might need you to do. 

That's totally fine, of course, but as a result I believe people don't get the opportunity to build systems **for scale**. This includes projects; much like the hackathon projects I used to do, I also believe that most people don't really build personal projects with scalability in mind. It's one thing to build something as a project, but it's totally different when you need to think about usability and scale. I learned this the hard way, but I'm glad I did. 

### Impact

I know it's kind of dumb, but I really do feel that software engineers these days should have a project where they've tried to develop for scalability and actual users. Getting the users can be difficult, so I don't think that's the important part. Having the experience of building software that needs to accommodate for lots of throughput is a difficult task, and doing this from the ground-up can be even more difficult. Any decisions made aren't things that you can just roll back. They'll probably get buried under tons of commits and features that come in the future, probably from other engineers, so every decision matters that much more.

## AI Usage

I plan to make an article in the future about what I think AI could do to software engineering in the future. For right now, I'll condense my feelings: I'm all for it, but I do think that there needs to be structure to the way that it's used in organizations. What that structure should be is something I'll cover in a later article, but I still do feel that you're behind if you're not using AI. 

How does AI even come into a topic like ground-up development? I think my situation when building SenseGuard from scratch is a great example of this. When I came up with my very initial idea, it was influenced completely by ChatGPT. Even as someone who considered himself pretty good with system design (at least for someone who had worked on existing systems in the past), I found that AI was really... bad at this kind of stuff. It's so hung up on thinking about the future that it frequently makes really crazy complicated systems that just aren't good. Well, they'd be good if you had thousands of users and a decent team of engineers. But when you're essentially a solo developer, that isn't really helpful, is it?

### It's Still Useful, Though!

AI is still useful, of course. Even after all the hate I've given it, it would be a lie to say that using AI will destroy your business. That being said, it's just not a good idea to use it as a crutch for poor system design skills. That includes me, too. I think I was a bit overconfident in my system design skills at the time, and I thought that I was using AI effectively to *help* with some questions I had. Looking back, I was definitely being stupid and didn't really understand anything I was building. 

My advice is that you need to start asking what the best architecture is for a certain feature, or if you're having trouble understanding the flow of data within a system and what tools you need, you should probably sit down and take a system design course (we'll go over this later). AI should only be used if you understand what your system needs and know the type of tools that you'll implement. Rather than asking "Should I use NoSQL or Postgres?" (which means you should probably go back and think about the data you'll be storing), a question that you might *want* to ask would be "Should I use MySQL or MariaDB?" (which honestly, if you know what MariaDB is, would be a pretty easy question to answer). 

My point is that AI is a really good supplement. For the whole design itself? Probably not. Maybe there's some job security for the system design folks out there, after all!

### Quick Test of AI Now

So I realize that it's been quite a while since September of 2025. As of writing this, Claude Fable has just been released, which is a huge jump from Sonnet 4.5. To see if it was worth writing this section of the article out, I had Opus 4.8 come up with the design of SenseGuard once more, kind of like when I was first designing it (sorry, I'm too broke to have Fable do this, so maybe there's some leeway there? I'm still skeptical, though). This time, I gave it even more context of us. SenseGuard as a brand and business have been much more grounded since I first started developing, so Opus has a lot more information to work with. I tried to keep my questions pretty basic and simple, just asking it to come up with a design of the system. I also made sure to ask it to keep things simple but still scalable, something that I should've asked Sonnet way back then.

Honestly, these results surprised me, and not in a good way. It was a bit scary to see that I was still being recommended to work with Apache Kafka, Valkey caching, and k8s clusters even when I had explicitly mentioned that we were just starting out. For reference, the only tool that our stack uses from all the things Opus recommended was Redis (valkey and redis are similar). There's a bit of bias here, but I'm proud of the stack that I've built over the past few months, and am confident that our stack can withhold a very high volume of users, and even spikes in users (which is inevitable after we onboard a new client). We're nowhere near close to needing k8s or kafka for streaming, so it's a bit scary that Opus was still recommending these. 

## Concluding Comments and Resources

It would be rude of me to write this whole article about the struggles of building from the ground-up and not offer my own resources of how to fix this. As a disclaimer, I wouldn't consider myself a great developer. I mean, I was the same dude who, 9 months ago, had AI design my whole architecture, so take what I say with a grain of salt!

When it comes to starting from scratch, it's important to start simple. If you have absolutely no clue where to start, I'd **highly** recommend [this roadmap](https://roadmap.sh/full-stack). I know this isn't a system design roadmap, but understanding your tools is important. If you were to see a nail in wood, it's good to know that you should be using a hammer, not a screwdriver! If you want to dive deeper, you could also follow the system design roadmap itself (linked [here](https://roadmap.sh/system-design)). This might be a bit overkill at the start, though. In the future, you should definitely go through it, though! Or maybe hire someone who knows what they're doing, advice I might need in the near future. :)

So yeah, that's all! This was a long-winded way of saying that you should be careful with using AI and that building a startup is a lot different from a regular job, but I'm glad I got the opportunity to voice my thoughts in this article.

Until next time!
