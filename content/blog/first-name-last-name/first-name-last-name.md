---
title: "First name, Last name"
description: Ask what the user wants to be referred to as and give the context of where you’ll be using this information
publish: true
date: 2026-08-03
tags:
  - ux
  - database design
  - forms
---

**Summary**

1. Name fields are culturally complex and not universally applicable.
2. Assumptions about "first" and "last" names can misrepresent users preferences.
3. User-centered approaches require asking for preferred names and context.


Collecting separate data entry fields for first name and last name seems like such a simple and useful distinction. It’s such a ubiquitous convention you might never have thought much about it. However, it’s often a needlessly limiting approach and a clear case of a technology-specific decision, like database table design, leaking out into the user experience.

There are, of course, useful reasons to want to capture name information in neat first name/last name distinctions. If you know the user’s first name, you can save a little space in that profile menu label. You can take a cordial, casual tone in your newsletter or that friendly “Welcome back Jane” heading. You might also want the user’s initials for a default avatar. There may be a legal requirement your product is obligated to meet.

But what even is a “first” and “last” name, really? Does that concept always make sense considering how names are given, structured, and used across cultures, contexts, and continents…

## Does first name mean the same thing to everyone?

Names in general are not so simple. Depending on culture and who is addressing whom, name structure and ordering vary. Depending on who you ask, the family name comes first. Some people have only one full name, multiple family names, and/or names that contain particles or connectors (for example Ní/O’ Neil or Da Vinci).

A first name might contain an honorific prefix the user squeezed in, or out of, the first name field. There are the common professional and academic titles, Dr., Prof., and Rev. In Japanese, [keigo](https://en.wikipedia.org/wiki/Honorific_speech_in_Japanese), adding prefixes for example o- (お〜) and go- (ご〜) are commonly used to convey respectful, humble, and polite relationships between the speaker and the named individual. The inclusion or exclusion of a prefix can be a sensitive subject for some. Understandable, perhaps, as they carry deep implications for topics such as identity, culture, gender, rank, age, respect, and career.

Some middle names carry far more significance to some and should always be included with the first. Vietnamese names often have multiple given names, placed at the end, that work together as a compound. “Nguyễn Văn Minh” might be formally addressed by the entire last given name portion “Văn Minh,” not just “Minh” alone. In Arabic, for another example, “Ibn Battuta” literally means “Son of Battuta”, Battuta being his father’s name.

From a preference perspective, a person’s legal name might differ from how they would like to be addressed. A person’s first name might have formal, diminutive, and intimate variants depending on the social purpose or reflecting cultural attitudes toward privacy and hierarchy.

So, is there one answer to the question, “what is a first/last name”?

## The labels we call names

The Ship of Theseus is a thought experiment or paradox, mostly about how identity relates to things over time. It speaks to the meaning of labels when the component parts of the named object change. Which parts are essential to the whole?

{% blockquote "Plutarch, Life of Theseus 23.1", "https://en.wikipedia.org/wiki/Ship_of_Theseus" %}
The ship wherein Theseus and the youth of Athens returned from Crete had thirty oars, and was preserved by the Athenians down even to the time of Demetrius Phalereus, for they took away the old planks as they decayed, putting in new and strong timber in their places, insomuch that this ship became a standing example among the philosophers, for the logical question of things that grow; one side holding that the ship remained the same, and the other contending that it was not the same.
{% endblockquote %}
 

Most paradoxes rely on some hidden false assumption. Not a philosopher myself, but if you ask me, the one hidden in the above is that there never really was a thing, one definitive thing, called the “Ship of Theseus”. Instead, what there was was a rough group of atoms and molecules arranged in the shape of a ship, owned by the Greek hero Theseus. This blob of atoms was labeled the “Ship of Theseus”. In its whole (fictitious) existence, that collection of atoms never stopped or settled for a single moment in its endless sloughing off of old or accumulation of new parts. At the scale of atoms, splitters, nails, or beams of wood, the ship was never not changing its constituent parts.

The point being that names and labels are not such simple things. When applied to an object, especially so when applied to a person.

The users of the label “Ship of Theseus”, those who found it useful to identify that general group of atoms with that particular name, are the reason the concept of the Ship of Theseus continued to exist, through its name.

It is the users of language who create and maintain its meanings. And it’s the owner, the context, and users of a name that determine what exactly a first name is and if and when it fits in that first name field.

## What can you collect instead?

Unless you’ve explicitly asked for a nickname, a full name, or a display name and explained why you’re collecting it in that format and how it will be used, there is no foolproof way of slicing up what information may collectively be submitted via a separate first and last name field as a shorthand way of referring to a person.

But at least the solution is simple. Simpler than the Ship of Theseus.

Consider explicitly designing your forms to use a single 'Full Name' field, which allows users to enter their name as they wish it to appear. For situations where a preferred or display name is important, provide an additional optional field labeled like 'Preferred Name', ‘Nickname’ or ‘Short name’. Don't forget to clarify how that name will be used, such as for communications or profile displays.
