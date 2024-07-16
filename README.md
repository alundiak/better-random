# better-random
An instrumental code for me to have a better code

![img1](./img1.png)


## Idea

https://random.org is NOT ideal random-ish approach to generate number, so when I need some number or sequence, I always increase a level of randomness.

This code aimed to introduce a way how to generate a sequence of numbers which would be random but after many iterations.

Idea also was to have ALL numbers from MIN_NUMBER to MAX_NUMBER inclusive, and that numbers NOT repeated and NOT skipped. Meaning that after sorting of such sequence oit would be 100% incremental sequence. In the code is used a [Fisher-Yates shuffle algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

I iterate 1 mln times, and final result write into CSV file, so that I can easily copy column and paste in Google Spreadsheet document.

## TODO

Code is stable, but not final - I have some other ideas around randomness.
