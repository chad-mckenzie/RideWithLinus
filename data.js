// ================================================================
// Ride with Linus — Coaster Data
// ================================================================
// Edit this file to add, update, or remove credits and wishlist
// entries. Then re-save — the dashboard reads it automatically.
//
// CREDITS fields:
//   name        — coaster name
//   park        — park name
//   state       — 2-letter state/province code
//   type        — "Steel" or "Wood"
//   height_ft   — height in feet
//   speed_mph   — top speed in mph
//   length_ft   — track length in feet
//   reaction    — Linus rating 1–5 (5 = 🔥🔥🔥)
//   rcdb_url    — full RCDB URL (optional)
//
// WISHLIST fields:
//   name, park, state, type, height_ft, speed_mph, length_ft
//   status      — e.g. "Planned 2026" or "Considering"
//   rcdb_url    — full RCDB URL (optional)
// ================================================================

const CREDITS = [
  { name: "Millennium Force",      park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 310, speed_mph: 93, length_ft: 6595, date: "2023-08-12", reaction: 4, rcdb_url: "https://rcdb.com/594.htm" },
  { name: "Steel Vengeance",       park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 205, speed_mph: 74, length_ft: 5740, date: "2023-08-12", reaction: 5, rcdb_url: "https://rcdb.com/15411.htm" },
  { name: "Maverick",              park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 105, speed_mph: 70, length_ft: 4450, date: "2023-08-12", reaction: 5, rcdb_url: "https://rcdb.com/3570.htm" },
  { name: "Magnum XL-200",         park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 205, speed_mph: 72, length_ft: 5106, date: "2023-08-12", reaction: 4, rcdb_url: "https://rcdb.com/11.htm" },
  { name: "Raptor",                park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 137, speed_mph: 57, length_ft: 3790, date: "2023-08-12", reaction: 3, rcdb_url: "https://rcdb.com/1.htm" },
  { name: "Gemini - Red",          park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 125, speed_mph: 60, length_ft: 3935, date: "2023-08-12", reaction: 3, rcdb_url: "https://rcdb.com/14.htm" },
  { name: "Blue Streak",           park: "Cedar Point",       state: "OH", type: "Wood",  height_ft: 78,  speed_mph: 40, length_ft: 2558, date: "2023-08-12", reaction: 3, rcdb_url: "https://rcdb.com/12.htm" },
  { name: "Rougarou",              park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 137, speed_mph: 60, length_ft: 3900, date: "2023-08-12", reaction: 3, rcdb_url: "https://rcdb.com/7.htm" },
  { name: "Valravn",               park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 223, speed_mph: 75, length_ft: 3415, date: "2023-08-12", reaction: 4, rcdb_url: "https://rcdb.com/13383.htm" },
  { name: "Corkscrew",             park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 85,  speed_mph: 48, length_ft: 2050, date: "2023-08-12", reaction: 3, rcdb_url: "https://rcdb.com/13.htm" },
  { name: "Iron Dragon",           park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 76,  speed_mph: 40, length_ft: 2800, date: "2023-08-12", reaction: 2, rcdb_url: "https://rcdb.com/17.htm" },
  { name: "GateKeeper",            park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 170,  speed_mph: 67, length_ft: 4164, date: "2023-08-12", reaction: 4, rcdb_url: "https://rcdb.com/10891.htm" },
  { name: "Siren's Curse",         park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 160,  speed_mph: 58, length_ft: 2965, date: "2023-08-12", reaction: 5, rcdb_url: "https://rcdb.com/22124.htm" },
  { name: "Top Thrill 2",          park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 420,  speed_mph: 120, length_ft: 3422, date: "2023-08-12", reaction: 5, rcdb_url: "https://rcdb.com/1896.htm" },
  { name: "Cedar Creek Mine Ride", park: "Cedar Point",       state: "OH", type: "Steel", height_ft: 48,  speed_mph: 42, length_ft: 2540, date: "2023-08-12", reaction: 2, rcdb_url: "https://rcdb.com/18.htm" },
  { name: "The Beast",             park: "Kings Island",      state: "OH", type: "Wood",  height_ft: 110, speed_mph: 65, length_ft: 7359, date: "2024-07-20", reaction: 5, rcdb_url: "https://rcdb.com/67.htm" },
  { name: "Orion",                 park: "Kings Island",      state: "OH", type: "Steel", height_ft: 287, speed_mph: 91, length_ft: 5321, date: "2024-07-20", reaction: 5, rcdb_url: "https://rcdb.com/11437.htm" },
  { name: "Diamondback",           park: "Kings Island",      state: "OH", type: "Steel", height_ft: 230, speed_mph: 80, length_ft: 5282, date: "2024-07-20", reaction: 5, rcdb_url: "https://rcdb.com/4253.htm" },
  { name: "Mystic Timbers",        park: "Kings Island",      state: "OH", type: "Wood",  height_ft: 109, speed_mph: 53, length_ft: 3265, date: "2024-07-20", reaction: 5, rcdb_url: "https://rcdb.com/14116.htm" },
  { name: "Banshee",               park: "Kings Island",      state: "OH", type: "Steel", height_ft: 167, speed_mph: 68, length_ft: 4124, date: "2024-07-20", reaction: 5, rcdb_url: "https://rcdb.com/6640.htm" },
  { name: "Adventure Express",     park: "Kings Island",      state: "OH", type: "Steel", height_ft: 55,  speed_mph: 35, length_ft: 2963, date: "2024-07-20", reaction: 3, rcdb_url: "https://rcdb.com/70.htm" },
  { name: "Flight of Fear",        park: "Kings Island",      state: "OH", type: "Steel", height_ft: 74,  speed_mph: 54, length_ft: 2704, date: "2024-07-20", reaction: 4, rcdb_url: "https://rcdb.com/66.htm" },
  { name: "Bat",                   park: "Kings Island",      state: "OH", type: "Steel", height_ft: 78,  speed_mph: 51, length_ft: 2352, date: "2024-07-20", reaction: 3, rcdb_url: "https://rcdb.com/73.htm" },
  { name: "Invertigo",             park: "Kings Island",      state: "OH", type: "Steel", height_ft: 131,  speed_mph: 50, length_ft: 1013, date: "2024-07-20", reaction: 3, rcdb_url: "https://rcdb.com/530.htm" },
  { name: "Queen City Stunt Coaster", park: "Kings Island",      state: "OH", type: "Steel", height_ft: 45,  speed_mph: 40, length_ft: 1960, date: "2024-07-20", reaction: 3, rcdb_url: "https://rcdb.com/2860.htm" },
  { name: "Racer - Red",           park: "Kings Island",      state: "OH", type: "Wood", height_ft: 88,  speed_mph: 53, length_ft: 3415, date: "2024-07-20", reaction: 4, rcdb_url: "https://rcdb.com/69.htm" },
  { name: "Racer - Blue",           park: "Kings Island",      state: "OH", type: "Wood", height_ft: 88,  speed_mph: 53, length_ft: 3415, date: "2024-07-20", reaction: 4, rcdb_url: "https://rcdb.com/69.htm" },
  { name: "Pantherian",            park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 305, speed_mph: 90, length_ft: 5100, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/4520.htm" },
  { name: "Twisted Timbers",       park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 111, speed_mph: 54, length_ft: 3361, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/15028.htm" },
  { name: "Dominator",             park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 157, speed_mph: 65, length_ft: 4210, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/4079.htm" },
  { name: "Tumbili",               park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 112,  speed_mph: 34, length_ft: 770, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/18846.htm" },
  { name: "Apple Zapple",          park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 51,  speed_mph: 35, length_ft: 1312, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/930.htm" },
  { name: "Flight of Fear",        park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 74,  speed_mph: 54, length_ft: 2705, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/138.htm" },
  { name: "Grizzly",               park: "Kings Dominion",    state: "VA", type: "Wood",  height_ft: 87,  speed_mph: 54, length_ft: 3150, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/90.htm" },
  { name: "Rapterra",              park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 145,  speed_mph: 65, length_ft: 3086, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/21885.htm" },
  { name: "Reptillian",            park: "Kings Dominion",    state: "VA", type: "Steel", height_ft: 100,  speed_mph: 41, length_ft: 2000, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/282.htm" },
  { name: "Afterburn",             park: "Carowinds",         state: "NC", type: "Steel", height_ft: 113,  speed_mph: 62, length_ft: 2956, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/527.htm" },
  { name: "Carolina Cyclone",      park: "Carowinds",         state: "NC", type: "Steel", height_ft: 95,  speed_mph: 41, length_ft: 2100, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/81.htm" },
  { name: "Carolina Goldrusher",   park: "Carowinds",         state: "NC", type: "Steel", height_ft: 56,  speed_mph: 34, length_ft: 2397, date: "2024-06-15", reaction: 2, rcdb_url: "https://rcdb.com/83.htm" },
  { name: "Copperhead Strike",     park: "Carowinds",         state: "NC", type: "Steel", height_ft: 82,  speed_mph: 50, length_ft: 3255, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/16349.htm" },
  { name: "Flying Cobras",         park: "Carowinds",         state: "NC", type: "Steel", height_ft: 116,  speed_mph: 47, length_ft: 935, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/4269.htm" },
  { name: "Fury 325",              park: "Carowinds",         state: "NC", type: "Steel", height_ft: 325,  speed_mph: 95, length_ft: 6602, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/12273.htm" },
  { name: "Hurler",                park: "Carowinds",         state: "NC", type: "Wood",  height_ft: 83,  speed_mph: 50, length_ft: 3157, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/85.htm" },
  { name: "Kiddy Hawk",            park: "Carowinds",         state: "NC", type: "Steel", height_ft: 48,  speed_mph: 26, length_ft: 1122, date: "2024-06-15", reaction: 1, rcdb_url: "https://rcdb.com/1897.htm" },
  { name: "Ricochet",              park: "Carowinds",         state: "NC", type: "Steel", height_ft: 45,  speed_mph: 28, length_ft: 1213, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/1478.htm" },
  { name: "Thunder Striker",       park: "Carowinds",         state: "NC", type: "Steel", height_ft: 232,  speed_mph: 75, length_ft: 5316, date: "2024-06-15", reaction: 5, rcdb_url: "https://rcdb.com/8588.htm" },
  { name: "Vortex",                park: "Carowinds",         state: "NC", type: "Steel", height_ft: 90,  speed_mph: 50, length_ft: 2040, date: "2024-06-15", reaction: 3, rcdb_url: "https://rcdb.com/86.htm" },
  { name: "Nighthawk",             park: "Carowinds",         state: "NC", type: "Steel", height_ft: 115,  speed_mph: 51, length_ft: 2765, date: "2024-06-15", reaction: 4, rcdb_url: "https://rcdb.com/2514.htm" },
  { name: "Talon",                 park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 135, speed_mph: 58, length_ft: 3110, date: "2025-06-14", reaction: 5, rcdb_url: "https://rcdb.com/735.htm" },
  { name: "Steel Force",           park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 200, speed_mph: 75, length_ft: 5600, date: "2025-06-14", reaction: 5, rcdb_url: "https://rcdb.com/276.htm" },
  { name: "Thunderhawk",           park: "Dorney Park",       state: "PA", type: "Wood",  height_ft: 82,  speed_mph: 45, length_ft: 3200, date: "2025-06-14", reaction: 4, rcdb_url: "https://rcdb.com/239.htm" },
  { name: "Possessed",             park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 185, speed_mph: 70, length_ft: 629,  date: "2025-06-14", reaction: 3, rcdb_url: "https://rcdb.com/4039.htm" },
  { name: "Wild Mouse",            park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 50,  speed_mph: 28, length_ft: 1213, date: "2025-06-14", reaction: 2, rcdb_url: "https://rcdb.com/601.htm" },
  { name: "Iron Menace",           park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 160,  speed_mph: 64, length_ft: 2169, date: "2025-06-14", reaction: 4, rcdb_url: "https://rcdb.com/21085.htm" },
  { name: "Hydra the Revenge",     park: "Dorney Park",       state: "PA", type: "Steel", height_ft: 95,  speed_mph: 53, length_ft: 3198, date: "2025-06-14", reaction: 3, rcdb_url: "https://rcdb.com/2528.htm" },
  { name: "Storm Runner",          park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 150, speed_mph: 72, length_ft: 2600, date: "2025-06-15", reaction: 5, rcdb_url: "https://rcdb.com/2498.htm" },
  { name: "Skyrush",               park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 200, speed_mph: 75, length_ft: 3600, date: "2025-06-15", reaction: 5, rcdb_url: "https://rcdb.com/10089.htm" },
  { name: "Fahrenheit",            park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 121, speed_mph: 58, length_ft: 2700, date: "2025-06-15", reaction: 5, rcdb_url: "https://rcdb.com/4049.htm" },
  { name: "Candymonium",           park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 210, speed_mph: 76, length_ft: 4636, date: "2025-06-15", reaction: 5, rcdb_url: "https://rcdb.com/16682.htm" },
  { name: "Great Bear",            park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 124, speed_mph: 58, length_ft: 2800, date: "2025-06-15", reaction: 3, rcdb_url: "https://rcdb.com/468.htm" },
  { name: "Wildcat's Revenge",     park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 140, speed_mph: 62, length_ft: 3510, date: "2025-06-15", reaction: 5, rcdb_url: "https://rcdb.com/20462.htm" },
  { name: "Comet",                 park: "Hersheypark",       state: "PA", type: "Wood",  height_ft: 84,  speed_mph: 50, length_ft: 3360, date: "2025-06-15", reaction: 4, rcdb_url: "https://rcdb.com/106.htm" },
  { name: "Lightning Racer - Thunder",       park: "Hersheypark",       state: "PA", type: "Wood",  height_ft: 91,  speed_mph: 52, length_ft: 3393, date: "2025-06-15", reaction: 4, rcdb_url: "https://rcdb.com/597.htm" },
  { name: "Laff Trakk",            park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 48,  speed_mph: 40, length_ft: 1400, date: "2025-06-15", reaction: 4, rcdb_url: "https://rcdb.com/12270.htm" },
  { name: "Jolly Rancher Remix",   park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 116,  speed_mph: 47, length_ft: 935, date: "2025-06-15", reaction: 3, rcdb_url: "https://rcdb.com/109.htm" },
  { name: "Trailblazer",   park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 56,  speed_mph: 37, length_ft: 1200, date: "2025-06-15", reaction: 2, rcdb_url: "https://rcdb.com/107.htm" },
  { name: "Wild Mouse",   park: "Hersheypark",       state: "PA", type: "Steel", height_ft: 45,  speed_mph: 28, length_ft: 1213, date: "2025-06-15", reaction: 3, rcdb_url: "https://rcdb.com/539.htm" },
  { name: "Goliath",               park: "Six Flags Over GA", state: "GA", type: "Steel", height_ft: 200, speed_mph: 70, length_ft: 4480, date: "2024-09-21", reaction: 5, rcdb_url: "https://rcdb.com/3290.htm" },
  { name: "Twisted Cyclone",       park: "Six Flags Over GA", state: "GA", type: "Steel", height_ft: 100,  speed_mph: 50, length_ft: 2400, date: "2024-09-21", reaction: 5, rcdb_url: "https://rcdb.com/15457.htm" },
  { name: "Superman: UF",          park: "Six Flags Over GA", state: "GA", type: "Steel", height_ft: 106, speed_mph: 51, length_ft: 2759, date: "2024-09-21", reaction: 3, rcdb_url: "https://rcdb.com/1568.htm" },
  { name: "Dare Devil Dive",       park: "Six Flags Over GA", state: "GA", type: "Steel", height_ft: 95,  speed_mph: 52, length_ft: 2099, date: "2024-09-21", reaction: 3, rcdb_url: "https://rcdb.com/9430.htm" },
  { name: "Georgia Scorcher",       park: "Six Flags Over GA", state: "GA", type: "Steel",  height_ft: 107,  speed_mph: 54, length_ft: 2970, date: "2024-09-21", reaction: 3, rcdb_url: "https://rcdb.com/556.htm" },
  { name: "Great American Scream Machine",             park: "Six Flags Over GA", state: "GA", type: "Wood", height_ft: 105, speed_mph: 57, length_ft: 3450, date: "2024-09-21", reaction: 4, rcdb_url: "https://rcdb.com/41.htm" },
  { name: "Batman the Ride",       park: "Six Flags Over GA", state: "GA", type: "Steel",  height_ft: 105,  speed_mph: 50, length_ft: 2700, date: "2024-09-21", reaction: 3, rcdb_url: "https://rcdb.com/421.htm" },
];

// ═══════════════════════════════════════════════════════════
// WISHLIST — coasters Linus plans to ride
// ═══════════════════════════════════════════════════════════
const WISHLIST = [
  { name: "Backlot Stunt Coaster", park: "Kings Dominion", state: "VA", type: "Steel", height_ft: 45, speed_mph: 40, length_ft: 1960, status: "Planned 2026", rcdb_url: "https://rcdb.com/3302.htm" },
  { name: "Racer 75 - North", park: "Kings Dominion", state: "VA", type: "Wood", height_ft: 85, speed_mph: 56, length_ft: 3368, status: "Planned 2026", rcdb_url: "https://rcdb.com/88.htm" },
  { name: "Racer 75 - South", park: "Kings Dominion", state: "VA", type: "Wood", height_ft: 85, speed_mph: 56, length_ft: 3368, status: "Planned 2026", rcdb_url: "https://rcdb.com/88.htm" },
  { name: "Leviathan",        park: "Canada's Wonderland", state: "ON", type: "Steel", height_ft: 306, speed_mph: 92, length_ft: 5486, status: "Planned 2026", rcdb_url: "https://rcdb.com/11659.htm" },
  { name: "Behemoth",         park: "Canada's Wonderland", state: "ON", type: "Steel", height_ft: 230, speed_mph: 77, length_ft: 5318, status: "Planned 2026", rcdb_url: "https://rcdb.com/9469.htm" },
  { name: "Yukon Striker",    park: "Canada's Wonderland", state: "ON", type: "Steel", height_ft: 245, speed_mph: 80, length_ft: 3625, status: "Planned 2026", rcdb_url: "https://rcdb.com/15244.htm" },
  { name: "Phoenix",          park: "Knoebels",           state: "PA", type: "Wood",  height_ft: 78,  speed_mph: 45, length_ft: 3200, status: "Considering", rcdb_url: "https://rcdb.com/367.htm" },
  { name: "El Toro",          park: "Six Flags GAdv",     state: "NJ", type: "Wood",  height_ft: 181, speed_mph: 70, length_ft: 4400, status: "Considering", rcdb_url: "https://rcdb.com/3236.htm" },
  { name: "ArieForce One",         park: "Fun Spot America",  state: "GA", type: "Steel", height_ft: 154, speed_mph: 63, length_ft: 3300, date: "2024-09-22", status: "Considering", rcdb_url: "https://rcdb.com/17629.htm" },
  { name: "White Lightning",       park: "Fun Spot America",  state: "FL", type: "Wood",  height_ft: 76,  speed_mph: 48, length_ft: 2000, date: "2024-03-10", status: "Considering", rcdb_url: "https://rcdb.com/11764.htm" },
  { name: "Freedom Flyer",         park: "Fun Spot America",  state: "FL", type: "Steel", height_ft: 41,  speed_mph: 35, length_ft: 1250, date: "2024-03-10",status: "Considering", rcdb_url: "https://rcdb.com/11766.htm" },
  { name: "Mine Blower",           park: "Fun Spot America",  state: "FL", type: "Wood",  height_ft: 44,  speed_mph: 38, length_ft: 1260, date: "2024-03-10", status: "Considering", rcdb_url: "https://rcdb.com/14946.htm" },
  { name: "Coastersaurus",         park: "Legoland Florida",  state: "FL", type: "Wood",  height_ft: 33,  speed_mph: 25, length_ft: 1260, date: "2023-03-18", status: "Considering", rcdb_url: "https://rcdb.com/10703.htm" },
  { name: "The Dragon",            park: "Legoland Florida",  state: "FL", type: "Steel", height_ft: 42,  speed_mph: 28, length_ft: 1260, date: "2023-03-18", status: "Considering", rcdb_url: "https://rcdb.com/10701.htm" },
  { name: "Hollywood Rip Ride",    park: "Universal Studios", state: "FL", type: "Steel", height_ft: 167, speed_mph: 65, length_ft: 3800, date: "2023-03-19", status: "Considering", rcdb_url: "https://rcdb.com/9456.htm" },
  { name: "Hagrid's Motorbike",    park: "Universal Studios", state: "FL", type: "Steel", height_ft: 65,  speed_mph: 50, length_ft: 4650, date: "2023-03-19", status: "Considering", rcdb_url: "https://rcdb.com/16829.htm" },
  { name: "Velocicoaster",         park: "Universal Islands", state: "FL", type: "Steel", height_ft: 155, speed_mph: 70, length_ft: 4700, date: "2023-03-19", status: "Considering", rcdb_url: "https://rcdb.com/17126.htm" },
  { name: "Incredible Hulk",       park: "Universal Islands", state: "FL", type: "Steel", height_ft: 105, speed_mph: 67, length_ft: 3700, date: "2023-03-19", status: "Considering", rcdb_url: "https://rcdb.com/1046.htm" },
];
