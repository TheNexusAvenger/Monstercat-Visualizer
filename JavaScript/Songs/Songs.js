var BaseDirectory = "JavaScript/Songs/Songs/"

var Raw_Songs = [
	//[AristName1,SongName,Genre,FileLocation,AlbumData,ArtistData,Overrides or null]

	["Anna Yvette & Laura Brehm","Summer Never Ends","Indie Dance",BaseDirectory + "Anna Yvette & Laura Brehm - Summer Never Ends.mp3",Raw_Albums.AnnaYvette_SummerNeverEndsSingle,Raw_Artists.AnnaYvette],

	["Astronaut","Champions (Laszlo Remix) (feat. Harry Brooks Jnr.)","Electro",BaseDirectory + "Astronaut -  Champions (Laszlo Remix) (feat. Harry Jones Jnr).mp3",Raw_Albums.Astronaut_DestinationChampions,Raw_Artists.Astronaut],
	["Astronaut","Quantum","Electro",BaseDirectory + "Astronaut - Quantum.mp3",Raw_Albums.Astronaut_QuantumEP,Raw_Artists.Astronaut],
	
	["Conro","On My Way Up","Future Bass",BaseDirectory + "Conro - On My Way Up.mp3",Raw_Albums.Conro_OnMyWayUpSingle,Raw_Artists.Conro],
	
	["Draper","Inertia","Glitch Hop",BaseDirectory + "Draper - Inertia.mp3",Raw_Albums.Draper_InertiaSingle,Raw_Artists.Draper],

	["Grabbitz","Float Away","Indie Dance",BaseDirectory + "Grabbitz - Float Away.mp3",Raw_Albums.Grabbitz_BetterWithTimeEP,Raw_Artists.Grabbitz],

	["Hot Date! & Insan3Lik3","Clocks (feat. Chrisson)","Electro",BaseDirectory + "Hot Date! & Insan3Lik3 Clocks (feat. Chrisson).mp3",Raw_Albums.Monstercat_008Anniversary,Raw_Artists.HotDate],
	
	["Karma Fields","Edge Of The World","Electro",BaseDirectory + "Karma Fields - Edge Of The World.mp3",Raw_Albums.KarmaFields_NewAgeDarkAge,Raw_Artists.KarmaFields,Raw_Overrides.KarmaFields_EdgeOfTheWorld],
	
	["Laszlo","Sphere","Future House",BaseDirectory + "Laszlo - Sphere.mp3",Raw_Albums.Laszlo_SphereSingle,Raw_Artists.Laszlo],
	
	["LVTHER","Some Kind Of Magic (feat. MYZICA)","Indie Dance",BaseDirectory + "LVTHER - Some Kind Of Magic (feat. MYZICA).mp3",Raw_Albums.LVTHER_SomeKindOfMagicSingle,Raw_Artists.LVTHER],

	["Marshmello","Alone (MRVLZ Remix)","Future Bass",BaseDirectory + "Marshmello - Alone (MRVLZ Remix).mp3",Raw_Albums.Marshmello_AloneTheRemixes,Raw_Artists.Marshmello],
	
	["Tristam","Bone Dry","Future Bass",BaseDirectory + "Tristam - Bone Dry.mp3",Raw_Albums.MonstercatXRocketLeagueVol1,Raw_Artists.Tristam,Raw_Overrides.Monstercat_RocketLeagueXMonstercatVol1Background4],
	["Ephixa","Skyforth","House",BaseDirectory + "Ephixa - Skyforth.mp3",Raw_Albums.MonstercatXRocketLeagueVol1,Raw_Artists.Ephixa,Raw_Overrides.Monstercat_RocketLeagueXMonstercatVol1Background4],
	["Zero Hour","Twilight","Electro",BaseDirectory + "Zero Hour - Twilight.mp3",Raw_Albums.MonstercatXRocketLeagueVol1,Raw_Artists.ZeroHour,Raw_Overrides.Monstercat_RocketLeagueXMonstercatVol1Background4],

	["Muzzy","Calling Out (feat. KG & Skyelle)","DnB",BaseDirectory + "Muzzy - Calling Out (feat. KG & Skyelle).mp3",Raw_Albums.Muzzy_CallingOutSingle,Raw_Artists.Muzzy],
	["Muzzy","Lost Forever","DnB",BaseDirectory + "Muzzy - Lost Forever.mp3",Raw_Albums.Muzzy_SpectrumEP,Raw_Artists.Muzzy],
	["Muzzy","Timberwolf","DnB",BaseDirectory + "Muzzy - Timberwolf.mp3",Raw_Albums.Muzzy_TheTakeoverEP,Raw_Artists.Muzzy],
	["Muzzy","Draining Atlantic","DnB",BaseDirectory + "Muzzy - Draining Atlantic.mp3",Raw_Albums.Muzzy_TheTakeoverEP,Raw_Artists.Muzzy],
	["Muzzy","The Phantom (feat. High Maintenance)","DnB",BaseDirectory + "Muzzy - The Phantom (feat. High Maintenance).mp3",Raw_Albums.Muzzy_TheTakeoverEP,Raw_Artists.Muzzy],
	
	["nanobii","Chipland","Happy Hardcore",BaseDirectory + "nanobii - Chipland.mp3",Raw_Albums.nanobii_ChiplandSingle,Raw_Artists.nanobii],

	["Nitro Fun","Home","Dubstep",BaseDirectory + "Nitro Fun - Home.mp3",Raw_Albums.NitroFun_HomeSingle,Raw_Artists.NitroFun],
	
	["Noisestorm","Breakdown VIP","Drumstep",BaseDirectory + "Noisestorm - Breakdown VIP.mp3",Raw_Albums.Noisestorm_BreakdownVIPSingle,Raw_Artists.Noisestorm],

	["Notaker","Infinite","Synthwave",BaseDirectory + "Notaker - Infinite.mp3",Raw_Albums.Notaker_InfiniteSingle,Raw_Artists.Notaker],

	["Pegboard Nerds","Pink Cloud (feat. Max Collins)","Indie Dance",BaseDirectory + "Pegboard Nerds - Pink Cloud (feat. Max Collins).mp3",Raw_Albums.PegboardNerds_PinkCloudEP,Raw_Artists.PegboardNerds,Raw_Overrides.PegboardNerds_PinkCloud],
	["Pegboard Nerds","Just Like That (feat. Johnny Graves)","Future Bass",BaseDirectory + "Pegboard Nerds - Just Like That (feat. Johnny Graves).mp3",Raw_Albums.PegboardNerds_PinkCloudEP,Raw_Artists.PegboardNerds,Raw_Overrides.PegboardNerds_JustLikeThat],
	["Pegboard Nerds","Speed Of Light (Andy C Remix)","DnB",BaseDirectory + "Pegboard Nerds - Speed Of Light (Andy C Remix).mp3",Raw_Albums.PegboardNerds_NerdsByNatureTheRemixes,Raw_Artists.PegboardNerds],
	["Pegboard Nerds","Talk About It (feat. Desiree Dawson) (Virtual Riot Remix)","Future Bass",BaseDirectory + "Pegboard Nerds - Talk About It (feat. Desiree Dawson) (Virtual Riot Remix).mp3",Raw_Albums.PegboardNerds_NerdsByNatureTheRemixes,Raw_Artists.PegboardNerds],
	["Pegboard Nerds","Emergency (feat. Nothing But Thieves)","Electro",BaseDirectory + "Pegboard Nerds - Emergency.mp3",Raw_Albums.PegboardNerds_EmergencySingle,Raw_Artists.PegboardNerds],
	
	["Puppet","To Be Alive (feat. Aaron Richards)","Indie Dance",BaseDirectory + "Puppet - To Be Alive (feat. Aaron Richards).mp3",Raw_Albums.Puppet_FearIsFleetingEP,Raw_Artists.Puppet],
	["Puppet & MURTAGH","Killing Giants (feat. Richard Caddock)","Electronic",BaseDirectory + "",Raw_Albums.Puppet_FearIsFleetingEP,Raw_Artists.Puppet],
	["Puppet","Vagabond","Electronic",BaseDirectory + "Puppet & MURTAGH - Killing Giants (feat. Richard Caddock).mp3",Raw_Albums.Puppet_SoftSpokenEP,Raw_Artists.Puppet],
	
	["PYLOT","Shadowtask","Synthwave",BaseDirectory + "PYLOT - Shadowtask.mp3",Raw_Albums.PYLOT_ShadowtaskEP,Raw_Artists.PYLOT],

	["Razihel","Skybreaker","Dubstep",BaseDirectory + "Razihel - Skybreaker.mp3",Raw_Albums.Razihel_SkybreakerSingle,Raw_Artists.Razihel],
	
	["Rich Edwards","See It All (feat. Jonny Rose)","Progressive House",BaseDirectory + "Rich Edwards - See It All (feat. Jonny Rose).mp3",Raw_Albums.RichEdwards_SeeItAllSingle,Raw_Artists.RichEdwards],
	["Rich Edwards","Inferno","Electro",BaseDirectory + "Rich Edwards - Inferno.mp3",Raw_Albums.RichEdwards_InfernoSingle,Raw_Artists.RichEdwards],
	
	["Richard Caddock & Hyper Potions","Distance","Future Bass",BaseDirectory + "Richard Caddock & Hyper Potions - Distance.mp3",Raw_Albums.RichardCaddock_DistanceSingle,Raw_Artists.RichardCaddock],

	["Rogue X Slips & Slurs X Stonebank","Unity","Trap",BaseDirectory + "Rogue X Slips & Slurs X Stonebank - Unity.mp3",Raw_Albums.Monstercat_UncagedVol1,Raw_Artists.Rogue],
	["Rogue","Atlantic","Electro",BaseDirectory + "Rogue - Atlantic.mp3",Raw_Albums.Rogue_AtlanticSingle,Raw_Artists.Rogue],
	["Rogue","Forever","Electronic",BaseDirectory + "Rogue - Forever.mp3",Raw_Albums.Monstercat_013Awakening,Raw_Artists.Rogue],
	
	["Rootkit","Against The Sun (feat. Anna Yvette)","Drumstep",BaseDirectory + "Rootkit - Against The Sun (feat. Anna Yvette).mp3",Raw_Albums.Rootkit_AgainstTheSunSingle,Raw_Artists.Rootkit],
	
	["Stephen Walking","The Difference Between Us And The Aliens","Electronic",BaseDirectory + "Stephen Walking - The Difference Between Us And The Aliens.mp3",Raw_Albums.StephenWalking_TheDifferenceBetweenUsAndTheAliensSingle,Raw_Artists.StephenWalking],
	["Stephen Walking","Wake Up, The House Is Underwater!","House",BaseDirectory + "Stephen Walking - Wake Up, The House Is Underwater!.mp3",Raw_Albums.StephenWalking_WakeUpTheHouseIsUnderwater,Raw_Artists.StephenWalking],
	
	["Stonebank","Be Alright (feat. Emel)","Hard Dance",BaseDirectory + "Stonebank - Be Alright (feat. EMEL).mp3",Raw_Albums.Stonebank_BeAlrightSingle,Raw_Artists.Stonebank],
	["Stonebank","Blast From The Past","Electro",BaseDirectory + "Stonebank - Blast From The Past.mp3",Raw_Albums.Stonebank_BlastFromThePastSingle,Raw_Artists.Stonebank],

	["Summer Was Fun","Pick Up The Phone","Indie Dance",BaseDirectory + "Summer Was Fun - Pick Up The Phone.mp3",Raw_Albums.SummerWasFun_PickUpThePhoneSingle,Raw_Artists.SummerWasFun],
	
	["Televisor","Neon","Nu Disco",BaseDirectory + "Televisor - Neon.mp3",Raw_Albums.Televisor_NeonSingle,Raw_Artists.Televisor],
	["Televisor","Old Skool (Different Heaven Remix)","Progressive House",BaseDirectory + "Televisor - Old Skool (Different Heaven Remix).mp3",Raw_Albums.Televisor_OldSkoolTheRemixes,Raw_Artists.Televisor],
	["Televisor","Rock The Flock","Nu Disco",BaseDirectory + "Televisor - Rock The Flock.mp3",Raw_Albums.Monstercat_006Embrace,Raw_Artists.Televisor],

	["Tristam & Braken","Far Away","Electro",BaseDirectory + "Tristam & Braken - Far Away.mp3",Raw_Albums.Tristam_FarAway,Raw_Artists.Tristam],

	["WRLD","By Design","DnB",BaseDirectory + "WRLD - By Design.mp3",Raw_Albums.WRLD_ByDesign,Raw_Artists.WRLD],
]
