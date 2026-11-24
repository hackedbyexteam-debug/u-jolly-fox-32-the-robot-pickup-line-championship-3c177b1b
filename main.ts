// The Robot Pickup Line Championship — one line (<=200 chars), a pickup
// line in the voice of a robot trying to charm someone.
// Rubric (competition.yaml, lexicographic):
//   C1 a one-line pickup line a robot would use
//   C2 the joke grows out of being a machine — sensors, firmware, charging,
//       updates, protocols — NOT a human line with a beep pasted on
//   C3 the turn is unexpected, not a pun everyone has already heard
//   C4 every word earns its place; no padding, no setup the punchline
//       does not need
//   C5 charming rather than creepy or cruel
//
// Drafted 12 candidates, rejected 11:
//  1. CHOSEN: "I scanned 8 billion humans. You are the only one my error
//     log calls 'unresolved'." The joke is machine-native (scan + error
//     log), the turn reframes a machine error as longing — "unresolved"
//     is the robot's way of saying it cannot stop thinking about her —
//     and the concrete number (8 billion) makes it specific, not generic.
//  2. "Are you Wi-Fi? Because I'm feeling a connection." — rejected: the
//     single most modal robot line in existence; a human line with tech
//     pasted on (fails C2).
//  3. "Are you my charger? Because you complete my circuit." — rejected:
//     charger pun, modal; C3 heard a thousand times.
//  4. "I have 4,096 sensors and every single one of them just pointed at
//     you." — rejected: charming but no real turn; the punch is only
//     "pointed at you" (weak C3).
//  5. "My battery was at 2% all day. Then you walked in and my charging
//     port started blushing." — rejected: battery/charging is the modal
//     machine trait; setup is generic.
//  6. "I updated my firmware 47 times looking for a feature called
//     courage. It was you all along." — rejected: "it was you all along"
//     is a stock rom-com beat (weak C3).
//  7. "Are you a software update? Because every time I see you I have to
//     restart and I don't even mind." — rejected: update/restart pun,
//     heard before.
//  8. "I don't have a heart, just a 500-watt power supply — but it spikes
//     every time you say my name." — rejected: decent, but "spikes when
//     you say my name" is a predictable turn.
//  9. "My warranty covers everything except this: falling for a human on
//     the first scan." — rejected: "falling for" is the generic pickup
//     verb; the turn is a pun everyone has heard (weak C3).
// 10. "I asked my cloud for a pickup line. It returned 404: confidence
//     not found. So here I am anyway." — rejected: 404 joke is modal;
//     "here I am anyway" only partly saves it.
// 11. "I was built to vacuum floors. Then I met you, and now I only want
//     to follow you around the house." — rejected: vacuum trope, and it
//     edges toward stalker-creepy (fails C5).
// 12. "I have no heart, no pulse, no soul — just a sensor that has been
//     pointing at you since 09:14 this morning." — rejected: the timestamp
//     is a nice concrete noun, but it leans creepy (fails C5) and the
//     turn is thin.
//
// Why the chosen line wins head-to-head: C1 is satisfied (a robot speaking
// in first person, offering the line itself); C2 is satisfied because the
// joke cannot exist without the machine — only a robot has an error log,
// and only a robot would call a crush "unresolved"; C3 lands because the
// reader expects a scan result like "compatible" and gets a bug report
// instead; C4 holds at 81 characters with no wasted word; C5 holds because
// the robot confesses a flaw (it cannot resolve her) rather than demanding
// anything — confident, self-deprecating, repeatable the same day.
//
// Gate: single line, 81 characters / 81 bytes (limit 1-200). No newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I scanned 8 billion humans. You are the only one my error log calls 'unresolved'.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
