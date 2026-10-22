function productUrl(x){return '/products/'+[x[7].split(' / ')[0],x[0],x[1],x[2],x[3]].join('-').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'/';}

const stock=[
["Volkswagen","Amarok",2010,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Beetle",2011,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Bora",2006,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Caddy",2003,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","EOS",2006,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk5/V",2003,2009,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk5 Variant (Estate)",2007,2009,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk6 Variant (Estate/Wagon)",2009,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Plus",2004,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf R32",2005,2008,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk6/VI GTI",2009,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk6/VI R",2010,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk6/VI",2008,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk6/VI Cabriolet",2011,2016,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Golf Mk5/V GTI",2004,2009,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Jetta",2006,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Lavida",2011,2012,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Magotan",2006,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Passat CC",2008,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Polo",2009,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Passat NMS",2012,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Passat B6 Estate/Wagon/Sedan",2005,2011,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Passat B7 Alltrack",2012,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Passat B7 Estate/Wagon/Sedan",2010,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Polo GTI",2009,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Scirocco",2008,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Rabbit Mk5",2006,2009,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Sharan",2010,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Sagitar",2005,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Touran",2003,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","T5 Transporter",2010,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","T5 Multivan",2010,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","T5 Caravelle",2010,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Tiguan",2007,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Volkswagen","Vento",2009,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["SEAT","Altea",2004,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["SEAT","Alhambra",2010,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["SEAT","Leon",2005,2012,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["SEAT","Toledo",2004,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Fabia",2007,2013,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Octavia",2006,2012,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Praktik",2007,2011,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Roomster",2003,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Rapid",2012,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Superb",2008,2014,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Skoda","Yeti",2009,2015,"9\"","8CORE • 2GB/32GB",180,"CR117"],
["Dodge","Nitro",2007,2011,"7\"","4CORE • 2GB/32GB",140,"CR116"],
["Chevrolet","Colorado",2004,2006,"7\"","4CORE • 2GB/32GB",140,"CR115"],
["GMC","Canyon",2004,2006,"7\"","4CORE • 2GB/32GB",140,"CR115"],
["Chevrolet","Silverado 1500",2007,2013,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Silverado 2500 / 3500",2007,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Tahoe",2007,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Equinox",2007,2009,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Traverse",2009,2012,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Express 1500",2008,2015,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Express 2500 / 3500",2008,2026,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Impala",2006,2013,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Suburban",2007,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Avalanche",2007,2013,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Chevrolet","Monte Carlo",2006,2007,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Sierra 1500",2007,2013,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Sierra 2500 / 3500",2007,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Yukon",2007,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Savana 1500",2008,2014,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Savana 2500 / 3500",2008,2026,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["GMC","Acadia",2007,2012,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Buick","Enclave",2008,2012,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Hummer","H2",2008,2009,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Hummer","SUT",2008,2009,"7\"","8CORE • 4GB/64GB",160,"CR070"],
["Toyota","Highlander",2008,2013,"7\"","4CORE • 2GB/32GB",140,"CR069"],
["Toyota","Tundra",2003,2006,"7\"","4CORE • 2GB/32GB",140,"CR069"],
["Chevrolet","Cobalt",2007,2010,"8\"","4CORE • 4GB/64GB",160,"CR068"],
["Toyota","RAV4",2001,2008,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","4Runner",2003,2009,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Camry",2002,2006,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Tundra",2003,2006,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Sequoia",2003,2007,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Daihatsu","Terios",2006,2010,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Land Cruiser 100",1998,2007,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Prado",1996,2009,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","FJ Cruiser",2003,2010,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Hilux",2001,2011,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Fortuner",2008,2011,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Alphard",2008,2015,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Toyota","Echo",2000,2005,"7\"","8CORE • 2GB/32GB",160,"CR114"],
["Ford","Mustang",1994,2004,"7\"","8CORE • 2GB/32GB",140,"CR108 / CR110"],
["Ford","Mustang",1994,2004,"7\"","4CORE • 2GB/32GB",120,"CR109 / CR111 / CR112 / CR113"],
["Kia","Forte / K3 / Cerato",2013,2018,"9\"","4CORE • 4GB/64GB",150,"CR088"],
["Kia","Forte / K4 / Cerato",2012,2016,"9\"","4CORE • 4GB/64GB",175,"CR089"],
["Kia","Sportage",2010,2016,"9\"","4CORE • 4GB/64GB",180,"CR090"],
["Kia","Sportage",2016,2022,"9.7\"","4CORE • 2GB/32GB",200,"CR091 / CR092"],
["Ford","Escape",2013,2019,'9"',"8CORE • 4GB/64GB",280.00,"CR067"],
["Dodge","Grand Caravan",2011,2013,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Jeep","Patriot",2009,2014,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Jeep","Liberty",2008,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Jeep","Compass",2009,2014,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Jeep","Wrangler / Unlimited",2007,2016,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Jeep","Commander",2008,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Chrysler","Sebring",2007,2010,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Chrysler","300C",2007,2010,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Chrysler","Aspen",2007,2010,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Caliber",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Dakota",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Avenger",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Ram 1500 / 2500 / 3500",2009,2012,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Journey",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Durango",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Dodge","Challenger",2009,2011,"9.7\"","4CORE • 2GB/32GB",180,"CR066","sold"],
["Honda","Civic Hatchback",2006,2011,"9\"","4CORE • 4GB/64GB",150,"CR071"],
["Honda","Civic",2006,2011,"10.1\"","4CORE • 4GB/64GB",150,"CR072"],
["Honda","Civic",2012,2015,"9.7\"","4CORE • 2GB/32GB",175,"CR073 / CR074"],
["Honda","Civic",2016,2020,"9\"","4CORE • 4GB/64GB",150,"CR075"],
["Honda","Accord",2008,2012,"10.1\"","4CORE • 4GB/64GB",180,"CR076"],
["Honda","CR-V",2002,2006,"9.7\"","4CORE • 2GB/32GB",160,"CR077"],
["Honda","CR-V",2007,2011,"9\"","4CORE • 4GB/64GB",150,"CR078"],
["Honda","CR-V",2012,2016,"10.1\"","4CORE • 4GB/64GB",160,"CR079"],
["Honda","Fit",2008,2013,"10.1\"","4CORE • 4GB/64GB",150,"CR080"],
["Honda","CR-Z",2010,2016,'9"',"4CORE • 2GB/64GB",150.00,"CR065"],
["Jeep","Grand Cherokee",2014,2022,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Jeep","Wrangler",2018,2020,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Jeep","Compass",2018,2020,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Jeep","Gladiator",2020,2023,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Dodge","Ram 1500 / 2500 / 3500",2013,2018,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Dodge","Challenger",2015,2023,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Dodge","Charger",2011,2023,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Dodge","Journey",2011,2020,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Dodge","Durango",2014,2020,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Chrysler","300 / 300C / 300S",2011,2023,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Chrysler","200 / 200C",2015,2020,"8.4\"","8CORE • 2GB/32GB • Factory 8.4″ screen only",200,"CR061","sold"],
["Nissan","Rogue / X-Trail / Qashqai",2014,2018,'10.1"',"4CORE • 2GB/32GB",150.00,"CR059"],
["Hyundai","Elantra",2004,2010,"9\"","4CORE • 4GB/64GB",120,"CR081"],
["Hyundai","Elantra",2011,2016,"9\"","4CORE • 4GB/64GB",150,"CR082 / CR083"],
["Hyundai","Elantra",2017,2018,"9.7\"","4CORE • 2GB/32GB",180,"CR084"],
["Hyundai","Tucson / ix35",2010,2015,"9.7\"","4CORE • 2GB/32GB",150,"CR085"],
["Hyundai","Santa Fe",2006,2012,"9.7\"","4CORE • 4GB/64GB",200,"CR086"],
["Hyundai","IX45 / Santa Fe",2013,2018,"9\"","4CORE • 4GB/64GB",200,"CR087"],
["Hyundai","IX45 / Santa Fe",2013,2018,'9"',"4CORE • 2GB/32GB",180.00,"CR060"],
["Nissan","Altima",2013,2018,'9"',"8CORE • 2GB/32GB",170.00,"CR058"],
["Honda","CR-V",2012,2016,'10"',"4CORE • 2GB/64GB",150.00,"CR057","sold"],
["Dodge","Durango",2014,2020,'9"',"4CORE • 2GB/64GB",210.00,"CR056"],
["Nissan","Sylphy",2012,2018,'10"',"4CORE • 2GB/32GB",150.00,"CR055"],
["Mercedes-Benz","Sprinter",2006,2017,'9"',"8CORE • 2GB/32GB",200.00,"CR054","sold"],
["Chevrolet","Cobalt",2007,2010,'10"',"8CORE • 2GB/32GB",185.00,"CR053"],
["Jeep","Wrangler / Unlimited",2007,2016,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Jeep","Patriot",2009,2014,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Jeep","Liberty",2008,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Jeep","Compass",2009,2014,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Jeep","Commander",2008,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Chrysler","Sebring",2007,2010,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Chrysler","300C",2007,2010,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Chrysler","Aspen",2007,2010,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Caliber",2009,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Dakota",2009,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Avenger",2008,2014,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Ram 1500 / 2500 / 3500",2009,2012,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Journey",2009,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Durango",2009,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Grand Caravan",2011,2013,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Dodge","Challenger",2009,2011,"10\"","4CORE • 4GB/64GB",220,"CR052"],
["Toyota","Corolla",2007,2012,"9\"","4CORE • 4GB/64GB",150,"CR093"],
["Toyota","Corolla",2009,2013,"9\"","4CORE • 4GB/64GB",150,"CR094"],
["Toyota","Corolla",2013,2016,"10.1\"","4CORE • 4GB/64GB",180,"CR095"],
["Toyota","Corolla",2017,2019,"10.1\"","4CORE • 4GB/64GB",180,"CR096"],
["Toyota","Camry",2006,2011,"9\"","4CORE • 4GB/64GB",150,"CR097"],
["Toyota","Camry",2007,2011,"10.1\"","4CORE • 4GB/64GB",150,"CR098"],
["Toyota","Camry",2012,2014,"10.1\"","4CORE • 4GB/64GB",150,"CR099"],
["Toyota","Camry",2015,2017,"10.1\"","4CORE • 4GB/64GB",160,"CR100"],
["Toyota","Yaris",2006,2011,"9\"","4CORE • 4GB/64GB",150,"CR101"],
["Toyota","Prius",2010,2015,"9\"","4CORE • 4GB/64GB",170,"CR102"],
["Toyota","RAV4",2006,2012,"9\"","4CORE • 4GB/64GB",120,"CR103"],
["Toyota","RAV4",2013,2018,"10.1\"","4CORE • 4GB/64GB",175,"CR104 / CR006","sold",["CR104","CR006"]],
["Toyota","Tacoma",2005,2015,"9.7\"","4CORE • 2GB/32GB",180,"CR105"],
["Toyota","Venza",2008,2016,'9"',"4CORE • 4GB/64GB",175.00,"CR051"],
["Chevrolet","Cobalt",2007,2010,'10"',"4CORE • 2GB/32GB",170.00,"CR050"],
["Honda","Civic",2016,2020,'9"',"4CORE • 2GB/64GB",120.00,"CR049"],
["Ford","Fusion",2006,2009,'7"',"8CORE • 2GB/32GB",200.00,"CR048"],
["GMC","Sierra (Denali)",2007,2011,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["GMC","Yukon (Denali)",2007,2013,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["GMC","Acadia (Denali)",2007,2012,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["GMC","Savana",2008,2013,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Buick","Enclave",2008,2012,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Silverado 1500HD / 2500HD / 3500HD (2nd gen; not 2007 Classic)",2007,2012,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Avalanche (GMT900)",2007,2011,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Express Van",2008,2011,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Impala (9th gen)",2006,2012,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Equinox (1st gen)",2005,2009,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","HHR (SS / LT / Panel / LS)",2006,2011,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Chevrolet","Monte Carlo (7th gen)",2006,2007,"8\"","4CORE • 2GB/32GB",150,"CR047"],
["Mazda","3",2004,2009,"9\"","4CORE • 4GB/64GB",160,"CR106","sold"],
["Mazda","3",2010,2013,"9\"","4CORE • 4GB/64GB",160,"CR107","sold"],
["Mazda","6 III GL / GJ",2012,2017,'9"',"4CORE • 2GB/64GB",180.00,"CR046"],
["Audi","A3 / S3 / RS3",2003,2012,'9" IPS',"4CORE • 2GB/32GB",180.00,"CR044 / CR062"],
["Mercedes-Benz","W204 / S204 / C300",2007,2010,'9.7"',"2GB/32GB",200.00,"CR043"],
["Honda","Accord",2003,2007,'10.1" IPS',"8CORE • 4GB/64GB",200.00,"CR042","sold"],
["Toyota","Corolla",2013,2017,'10.1" IPS',"4CORE • 4GB/64GB",250.00,"CR004","sold"],
["Ford","Mondeo",2013,2016,'9"',"4CORE • 2GB/32GB",150.00,"CR041"],
["Chevrolet","Silverado",2007,2014,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["Chevrolet","Avalanche",2007,2014,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["Chevrolet","Suburban",2007,2014,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["Chevrolet","Tahoe",2007,2014,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["GMC","Sierra",2007,2013,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["GMC","Yukon",2007,2013,'9.7"',"4CORE • 2GB/32GB",190.00,"CR040","sold"],
["Ford","Mustang",2005,2009,'10"',"8CORE • 2GB/64GB",190.00,"CR039"],
["Ford","Explorer",2006,2010,'10"',"8CORE • 2GB/64GB",190.00,"CR039"],
["Jeep","Renegade",2015,2020,'9" IPS',"4CORE • 2GB/32GB",150.00,"CR038"],
["Ford","Fiesta",2017,2023,'10"',"4CORE • 2GB/32GB",175.00,"CR037"],
["Ford","Mustang",2005,2009,'10"',"4CORE • 2GB/64GB",170.00,"CR035"],
["Ford","Explorer",2006,2010,'10"',"4CORE • 2GB/64GB",170.00,"CR035"],
["Hyundai","Genesis",2009,2014,'9"',"4CORE • 4GB/64GB",180.00,"CR034"],
["BMW","3 Series E46",1999,2004,'7"',"2GB/64GB",200.00,"CR019"],
["Honda","CR-V",2002,2006,'9"',"4GB/64GB",100.00,"CR002"],
["Honda","Accord",2013,2016,'10"',"4GB/64GB",200.00,"CR001"],
["Hyundai","Sonata (Basic)",2010,2014,'9.7" IPS',"4-Core • 4GB/64GB",300.00,"CR003"],
["Toyota","Corolla",2009,2013,'9"',"Quad-Core • 1GB/32GB",175.00,"CR005"],
["Toyota","Corolla",2009,2013,'7"',"4-Core • 2GB/64GB",140,"CR011"],
["Toyota","RAV4",2001,2008,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Prado",1996,2009,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Vios",2003,2010,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Hilux",2001,2011,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Daihatsu","Terios",2006,2010,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Vitz",2003,2010,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Avanza",2003,2010,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Land Cruiser 100",1998,2007,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","4Runner",2002,2009,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Sequoia",2003,2007,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Tundra",2003,2006,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Camry",2002,2006,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","FJ Cruiser",2003,2010,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","RunX",2003,2006,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Previa",2006,2011,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Estima",2006,2011,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Tarago",2006,2011,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Echo",2000,2005,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Alphard",2008,2015,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Fortuner",2008,2011,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Soluna Vios",2003,2007,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Daihatsu","Be-go",2006,2012,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Perodua","Nautica",2006,2012,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Rush",2006,2012,"7\"","4-Core • 2GB/64GB",140,"CR011"],
["Toyota","Corolla",2009,2013,'7"',"4-Core • 2GB/32GB",150.00,"CR008 / CR009 / CR010"],
["Toyota","Tacoma",2005,2013,'10"',"8-Core • 2GB/32GB",250.00,"CR007"],
["Nissan","Altima",2013,2018,'9"',"4CORE • 2GB/32GB",150.00,"CR018"],
["Nissan","Altima / Teana",2013,2018,'10"',"Quad-Core • 2GB/64GB",150.00,"CR012"],
["Nissan","Versa Sedan",2015,2019,'10"',"2GB/32GB",150.00,"CR013"],
["Nissan","Frontier",2005,2008,'7"',"2GB/32GB",150.00,"CR015 / CR016 / CR017"],
["Nissan","Frontier (8-Core)",2005,2008,'7"',"2GB/32GB",180.00,"CR014"],
["Ford","F-150",2009,2012,'9" IPS',"2GB/64GB • Android 12 • 5G (WiFi6)",200.00,"CR020"],
["Ford","Escape",2013,2019,'9"',"4CORE • 4GB/64GB",250.00,"CR021 / CR045"],
["Ford","Mustang",2005,2009,'7"',"2GB/64GB",150.00,"CR022"],
["Ford","Fusion",2005,2011,'7" IPS',"4-Core • 4GB/64GB",200.00,"CR023"],
["Ford","Fiesta",2005,2017,'7" IPS',"4-Core • 4GB/64GB",200.00,"CR023"],
["Ford","Transit",2005,2016,'7" IPS',"4-Core • 4GB/64GB",200.00,"CR023"],
["Ford","Focus",2005,2008,'7" IPS',"4-Core • 4GB/64GB",200.00,"CR023"],
["Ford","F-250 / F-350 Super Duty",1999,2004,'7"',"4GB/64GB",200.00,"CR024"],
["Ford","Edge",2007,2010,'7"',"4GB/64GB",200.00,"CR025"],
["Chevrolet","Silverado 1500HD / 2500HD / 3500HD",2007,2014,'10"',"4CORE • 2GB/32GB",200.00,"CR028 / CR064"],
["GMC","Yukon",2007,2014,'10"',"4CORE • 2GB/32GB",200.00,"CR028 / CR064"],
["GMC","Sierra",2007,2014,'10"',"4CORE • 2GB/32GB",200.00,"CR028 / CR064"],
["GMC","Acadia",2007,2016,'10"',"4CORE • 2GB/32GB",200.00,"CR028 / CR064"],
["Chevrolet","Silverado 1500HD / 2500HD / 3500HD",2007,2014,'10"',"4GB/64GB",220.00,"CR036"],
["Chevrolet","Silverado",2003,2006,'7"',"4GB/64GB",125.00,"CR027"],
["Chevrolet","Impala",2003,2006,'7"',"4GB/64GB",125.00,"CR027"],
["Chevrolet","Tahoe",2003,2006,'7"',"4GB/64GB",125.00,"CR027"],
["GMC","Sierra",2003,2006,'7"',"4GB/64GB",125.00,"CR027"],
["GMC","Yukon",2002,2009,'7"',"4GB/64GB",125.00,"CR027"],
["Chevrolet","Colorado",2004,2012,"7\"","4GB/64GB",125,"CR027"],
["Chevrolet","Avalanche",2003,2006,"7\"","4GB/64GB",125,"CR027"],
["Chevrolet","Suburban",2003,2006,"7\"","4GB/64GB",125,"CR027"],
["Chevrolet","SSR",2003,2006,"7\"","4GB/64GB",125,"CR027"],
["GMC","Canyon",2004,2012,"7\"","4GB/64GB",125,"CR027"],
["Hummer","H2",2003,2007,"7\"","4GB/64GB",125,"CR027"],
["Dodge","Nitro",2007,2011,'7"',"2GB/64GB",150.00,"CR030"],
["Dodge","Grand Caravan",2008,2020,'7"',"2GB/32GB",200.00,"CR029"],
["Volkswagen","Rabbit Mk5",2006,2009,'9"',"2GB/32GB",150.00,"CR031"],
["Mercedes-Benz","SL-Class R230",2005,2012,'9"',"4GB/64GB",150.00,"CR032"],
["Mercedes-Benz","SL350",2005,2012,'9"',"4GB/64GB",150.00,"CR032"],
["Mercedes-Benz","SL500",2005,2012,'9"',"4GB/64GB",150.00,"CR032"],
["Mercedes-Benz","SL63",2005,2012,'9"',"4GB/64GB",150.00,"CR032"],
["Mercedes-Benz","SL65",2005,2012,'9"',"4GB/64GB",150.00,"CR032"],
["Mercedes-Benz","C-Class W203",2003,2009,'9"',"8-Core • 2GB/64GB",250.00,"CR033"],
["Mercedes-Benz","CLK W209",2003,2009,'9"',"8-Core • 2GB/64GB",250.00,"CR033"],
["Fiat","500",2007,2015,'6.86"',"2GB/64GB",200.00,"CR026","sold"]
];
const allBrands=[...new Set(stock.map(x=>x[0]))].sort();
const Y=document.querySelector("#year"),M=document.querySelector("#make"),D=document.querySelector("#model"),B=document.querySelector("#brands"),R=document.querySelector("#results");
const viewControls=document.querySelector('#catalogViewControls');
function setCatalogView(view){
 const grid=view==='grid';R.classList.toggle('grid-view',grid);
 viewControls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.catalogView===(grid?'grid':'list'))));
 try{localStorage.setItem('isc-catalog-view',grid?'grid':'list')}catch{}
}
let savedCatalogView='list';try{savedCatalogView=localStorage.getItem('isc-catalog-view')||'list'}catch{}
setCatalogView(savedCatalogView);
viewControls.addEventListener('click',e=>{const b=e.target.closest('button[data-catalog-view]');if(b)setCatalogView(b.dataset.catalogView)});
new MutationObserver(()=>{viewControls.hidden=!R.querySelector('.card')}).observe(R,{childList:true});

let cart=[];try{const saved=JSON.parse(sessionStorage.getItem('isc-cart')||'[]');if(Array.isArray(saved))cart=saved;}catch{}

function opt(el,v){el.add(new Option(v,v))}
for(let y=new Date().getFullYear()+1;y>=1995;y--)opt(Y,y);
allBrands.forEach(x=>opt(M,x));
const brandLogos={
 "SEAT":"images/brands/seat.svg",
 "Skoda":"images/brands/skoda.svg",
 "Hummer": "images/brands/hummer.svg",
 "Daihatsu": "images/brands/daihatsu.svg",
 "Perodua": "https://raw.githubusercontent.com/vehiclespecs/brand-logos/main/perodua-logo.png",
 "Kia": "images/brands/kia.svg",
 "Chrysler": "images/brands/chrysler.svg",
 "Buick": "images/brands/buick.svg",
 "Mazda": "images/brands/mazda.svg",
  "Audi": "images/brands/audi.svg",
  "Jeep": "images/brands/jeep.svg",
  "BMW": "images/brands/bmw.png",
  "Chevrolet": "images/brands/chevrolet.png",
  "Dodge": "images/brands/dodge.png",
  "Fiat": "images/brands/fiat.png",
  "Ford": "images/brands/ford.png",
  "GMC": "images/brands/gmc.png",
  "Honda": "images/brands/honda.png",
  "Hyundai": "images/brands/hyundai.png",
  "Mercedes-Benz": "images/brands/mercedes-benz.png",
  "Nissan": "images/brands/nissan.png",
  "Toyota": "images/brands/toyota.png",
  "Volkswagen": "images/brands/volkswagen.png"
};
allBrands.forEach(b=>{const x=document.createElement("button");x.className="brand";const logo=brandLogos[b];x.innerHTML=(logo?'<img class="brand-logo" src="'+logo+'" alt="'+b+' logo">':'<span class="brand-logo"></span>')+'<span class="brand-name">'+b+'</span><span class="brand-arrow">›</span>';x.onclick=()=>{M.value=b;Y.value="";loadModels();showBrand(b,x)};B.appendChild(x)});

const T=document.querySelector("#productTree");
const physicalCodes=[...new Set(stock.flatMap(x=>(x[7]||"").split(" / ").filter(Boolean)))];
document.querySelector("#totalQty").textContent=physicalCodes.length;
allBrands.forEach(b=>{const wrap=document.createElement("div"),brandItems=stock.filter(x=>x[0]===b);const btn=document.createElement("button");btn.className="tree-brand";btn.innerHTML='<span>+ '+b+'</span><span class="tree-count">'+brandItems.length+'</span>';const models=document.createElement("div");models.style.display="none";[...new Set(brandItems.map(x=>x[1]))].sort().forEach(m=>{const modelItems=brandItems.filter(x=>x[1]===m);const mb=document.createElement("button");mb.className="tree-model";mb.innerHTML='<span>'+m+'</span> <span class="tree-count">'+modelItems.length+'</span>';mb.onclick=()=>{M.value=b;Y.value="";loadModels();D.value=m;render();setTimeout(()=>viewControls.scrollIntoView({behavior:"smooth",block:"start"}),50)};models.appendChild(mb)});btn.onclick=()=>{const open=models.style.display!=="none";models.style.display=open?"none":"block";btn.querySelector("span").textContent=(open?"+ ":"− ")+b};wrap.append(btn,models);T.appendChild(wrap)});
function loadModels(){D.innerHTML='<option value="">Model</option>';[...new Set(stock.filter(x=>!M.value||x[0]===M.value).map(x=>x[1]))].sort().forEach(x=>opt(D,x));render()}
function showBrand(b,el){M.value=b;Y.value="";loadModels();document.querySelectorAll(".brand").forEach(x=>x.classList.remove("active"));if(el)el.classList.add("active");R.innerHTML=stock.filter(x=>x[0]===b).map(card).join("");setTimeout(()=>R.scrollIntoView({behavior:"smooth",block:"start"}),50)}

const productImages={
"CR106":["images/CR106/01.jpg","images/CR106/02.jpg","images/CR106/03.jpg","images/CR106/04.jpg","images/CR106/05.jpg","images/CR106/06.jpg","images/CR106/07.jpg","images/CR106/08.jpg"],
"CR107":["images/CR107/01.jpg","images/CR107/02.jpg","images/CR107/03.jpg","images/CR107/04.jpg","images/CR107/05.jpg","images/CR107/06.jpg","images/CR107/07.jpg","images/CR107/08.jpg"],
"CR093":["images/CR093/01.jpg","images/CR093/02.jpg","images/CR093/03.jpg","images/CR093/04.jpg","images/CR093/05.jpg","images/CR093/06.jpg","images/CR093/07.jpg"],
"CR094":["images/CR094/01.jpg","images/CR094/02.jpg","images/CR094/03.jpg","images/CR094/04.jpg","images/CR094/05.jpg","images/CR094/06.jpg","images/CR094/07.jpg","images/CR094/08.jpg"],
"CR095":["images/CR095/01.jpg","images/CR095/02.jpg","images/CR095/03.jpg","images/CR095/04.jpg","images/CR095/05.jpg","images/CR095/06.jpg","images/CR095/07.jpg","images/CR095/08.jpg"],
"CR096":["images/CR096/04.png","images/CR096/02.webp","images/CR096/03.jpg","images/CR096/03.webp","images/CR096/06.png","images/CR096/07.webp","images/CR096/08.webp"],
"CR097":["images/CR097/01.jpg","images/CR097/02.jpg","images/CR097/03.jpg","images/CR097/04.jpg","images/CR097/05.jpg","images/CR097/06.jpg","images/CR097/07.jpg","images/CR097/08.jpg"],
"CR098":["images/CR098/01.jpg","images/CR098/02.jpg","images/CR098/03.jpg","images/CR098/04.jpg","images/CR098/05.jpg","images/CR098/06.jpg","images/CR098/07.jpg","images/CR098/08.jpg"],
"CR099":["images/CR099/01.jpg","images/CR099/02.jpg","images/CR099/03.jpg","images/CR099/04.jpg","images/CR099/05.jpg","images/CR099/06.jpg","images/CR099/07.jpg","images/CR099/08.jpg"],
"CR100":["images/CR100/01.jpg","images/CR100/02.jpg","images/CR100/03.jpg","images/CR100/04.jpg","images/CR100/05.jpg","images/CR100/06.jpg","images/CR100/07.jpg"],
"CR101":["images/CR101/01.avif","images/CR101/02.jpeg","images/CR101/03.avif","images/CR101/04.avif","images/CR101/05.avif","images/CR101/06.jpg","images/CR101/07.jpg","images/CR101/08.jpg"],
"CR102":["images/CR102/01.jpg","images/CR102/02.jpg","images/CR102/03.jpg","images/CR102/04.jpg","images/CR102/05.jpg","images/CR102/06.jpg","images/CR102/07.jpg","images/CR102/08.jpg"],
"CR103":["images/CR103/01.jpg","images/CR103/02.jpg","images/CR103/03.jpg","images/CR103/04.jpg","images/CR103/05.jpg","images/CR103/06.jpg","images/CR103/07.jpg","images/CR103/08.jpg"],
"CR104 / CR006":["images/CR104/01.jpg","images/CR104/02.jpg","images/CR104/03.jpg","images/CR104/04.jpg","images/CR104/05.jpg","images/CR104/06.jpg","images/CR104/07.jpg","images/CR104/08.jpg"],
"CR105":["images/CR105/01.png","images/CR105/02.webp","images/CR105/03.webp","images/CR105/04.webp","images/CR105/05.webp","images/CR105/06.webp","images/CR105/07.webp","images/CR105/08.jpg"],
"CR088":["images/CR088/01.jpg","images/CR088/02.jpg","images/CR088/03.jpg","images/CR088/04.jpg","images/CR088/05.jpg","images/CR088/06.jpg","images/CR088/07.jpg"],
"CR089":["images/CR089/01.webp","images/CR089/02.webp","images/CR089/04.webp","images/CR089/05.webp","images/CR089/06.webp","images/CR089/07.webp","images/CR089/08.webp"],
"CR090":["images/CR090/01.png","images/CR090/02.jpg","images/CR090/03.jpg","images/CR090/04.jpg","images/CR090/05.jpg","images/CR090/06.jpg","images/CR090/07.jpg","images/CR090/08.jpg"],
"CR091 / CR092":["images/CR091/01.jpg","images/CR091/02.jpg","images/CR091/03.jpg","images/CR091/04.jpg","images/CR091/06.jpg","images/CR091/07.jpg"],
"CR081":["images/CR081/01.jpg","images/CR081/02.jpg","images/CR081/03.jpg","images/CR081/04.jpg","images/CR081/05.jpg","images/CR081/06.jpg","images/CR081/07.jpg","images/CR081/08.jpg"],
"CR082 / CR083":["images/CR082/01.jpg?v=648029bf","images/CR082/02.jpg","images/CR082/03.jpg","images/CR082/04.jpg","images/CR082/05.jpg","images/CR082/06.jpg","images/CR082/07.jpg","images/CR082/08.jpg"],
"CR084":["images/CR084/01.jpg","images/CR084/02.png","images/CR084/03.png","images/CR084/04.jpg","images/CR084/05.jpg","images/CR084/06.jpg","images/CR084/07.jpg","images/CR084/08.jpg"],
"CR085":["images/CR085/01.png","images/CR085/02.jpg","images/CR085/03.jpg","images/CR085/04.jpg","images/CR085/05.jpg","images/CR085/06.jpg","images/CR085/07.jpg","images/CR085/08.jpg"],
"CR086":["images/CR086/01.png","images/CR086/02.jpg","images/CR086/03.jpg","images/CR086/04.jpg","images/CR086/05.jpg","images/CR086/06.jpg","images/CR086/07.jpg","images/CR086/08.jpg"],
"CR087":["images/CR087/01.jpg","images/CR087/02.jpg","images/CR087/03.jpg","images/CR087/04.jpg","images/CR087/05.jpg","images/CR087/06.jpg","images/CR087/07.jpg","images/CR087/08.jpg"],
"CR071":["images/CR071/01.webp","images/CR071/02.jpg","images/CR071/03.jpg","images/CR071/04.jpg"],
"CR072":["images/CR072/01.jpg?v=8237fc0a","images/CR072/02.jpg","images/CR072/03.jpg","images/CR072/04.jpg","images/CR072/05.jpg","images/CR072/06.jpg","images/CR072/07.jpg","images/CR072/08.jpg"],
"CR073 / CR074":["images/CR073/01.jpg","images/CR073/02.jpg","images/CR073/03.jpg","images/CR073/04.jpg","images/CR073/05.jpg"],
"CR075":["images/CR075/01.jpg","images/CR075/02.jpg","images/CR075/03.jpg","images/CR075/04.jpg","images/CR075/05.jpg","images/CR075/06.jpg","images/CR075/07.jpg","images/CR075/08.jpg"],
"CR076":["images/CR076/01.jpg","images/CR076/02.jpg","images/CR076/03.jpg","images/CR076/04.jpg","images/CR076/05.jpg","images/CR076/06.jpg","images/CR076/07.jpg","images/CR076/08.jpg"],
"CR077":["images/CR077/01.jpg","images/CR077/02.jpg","images/CR077/03.jpg","images/CR077/04.jpg","images/CR077/05.jpg","images/CR077/06.jpg","images/CR077/07.jpg","images/CR077/8.jpg"],
"CR078":["images/CR078/01.jpg","images/CR078/02.jpg","images/CR078/03.jpg","images/CR078/04.jpg","images/CR078/05.jpg","images/CR078/06.jpg","images/CR078/07.jpg"],
"CR079":["images/CR079/01.jpg","images/CR079/02.jpg","images/CR079/03.jpg","images/CR079/04.jpg","images/CR079/05.jpg","images/CR079/06.jpg","images/CR079/07.jpg","images/CR079/08.jpg"],
"CR080":["images/CR080/01.jpg","images/CR080/02.jpg","images/CR080/03.jpg","images/CR080/04.jpg","images/CR080/05.jpg","images/CR080/06.jpg","images/CR080/07.jpg","images/CR080/08.jpg"],
 CR067:["images/CR021/01.png","images/CR021/02.jpg","images/CR021/03.jpg","images/CR021/04.jpg","images/CR021/05.jpg","images/CR021/06.jpg","images/CR021/07.jpg","images/CR021/08.jpg"],
 CR066:["images/CR066/01.jpg","images/CR066/02.jpg","images/CR066/03.jpg","images/CR066/04.jpg","images/CR066/05.jpg","images/CR066/06.jpg","images/CR066/07.jpg","images/CR066/08.jpg"],
 CR065:["images/CR065/01.png","images/CR065/02.jpg","images/CR065/03.jpg","images/CR065/04.jpg","images/CR065/05.jpg","images/CR065/06.jpg","images/CR065/07.jpg","images/CR065/08.jpg"],
 CR061:["images/CR061/01.jpg","images/CR061/02.jpg","images/CR061/03.jpg","images/CR061/04.jpg","images/CR061/05.jpg","images/CR061/06.jpg","images/CR061/07.jpg","images/CR061/08.jpg"],
 CR060:["images/CR060/01.png","images/CR060/02.jpg","images/CR060/03.jpg","images/CR060/04.jpg","images/CR060/05.jpg","images/CR060/06.jpg","images/CR060/07.jpg","images/CR060/08.jpg"],
 CR059:["images/CR059/01.png","images/CR059/02.jpg","images/CR059/03.jpg","images/CR059/04.jpg","images/CR059/05.jpg","images/CR059/06.jpg","images/CR059/07.jpg","images/CR059/08.jpg"],
 CR058:["images/CR018/01.png","images/CR018/02.avif","images/CR018/03.avif","images/CR018/04.avif","images/CR018/05.avif","images/CR018/06.avif","images/CR018/07.avif","images/CR018/08.avif"],
 CR057:["images/CR057/01.jpg","images/CR057/02.jpg","images/CR057/03.jpg","images/CR057/04.jpg","images/CR057/05.jpg","images/CR057/06.jpg","images/CR057/07.jpg","images/CR057/08.jpg"],
 CR056:["images/CR056/01.png","images/CR056/02.jpg","images/CR056/03.jpg","images/CR056/04.jpg","images/CR056/05.jpg","images/CR056/06.jpg","images/CR056/07.jpg","images/CR056/08.jpg"],
 CR055:["images/CR055/01.png","images/CR055/02.jpg","images/CR055/03.jpg","images/CR055/04.jpg","images/CR055/05.jpg","images/CR055/06.jpg","images/CR055/07.jpg","images/CR055/08.jpg"],
 CR054:["images/CR054/01.png","images/CR054/02.jpg","images/CR054/03.jpg","images/CR054/04.jpg","images/CR054/05.jpg","images/CR054/06.jpg","images/CR054/07.jpg","images/CR054/08.jpg"],
 CR053:["images/CR050/01.jpg","images/CR050/02.jpg","images/CR050/03.jpg","images/CR050/04.jpg","images/CR050/05.jpg","images/CR050/06.jpg","images/CR050/07.jpg","images/CR050/08.jpg"],
 CR052:["images/CR052/01.png","images/CR052/02.jpeg","images/CR052/03.jpg","images/CR052/04.avif","images/CR052/05.avif","images/CR052/06.avif","images/CR052/07.avif","images/CR052/08.avif"],
 CR051:["images/CR051/01.png","images/CR051/02.jpg","images/CR051/03.jpg","images/CR051/04.jpg","images/CR051/05.jpg","images/CR051/06.jpg","images/CR051/07.jpg","images/CR051/08.jpg"],
 CR050:["images/CR050/01.jpg","images/CR050/02.jpg","images/CR050/03.jpg","images/CR050/04.jpg","images/CR050/05.jpg","images/CR050/06.jpg","images/CR050/07.jpg","images/CR050/08.jpg"],
 CR049:["images/CR049/01.png","images/CR049/02.jpg","images/CR049/03.jpg","images/CR049/04.jpg","images/CR049/05.jpg","images/CR049/06.jpg","images/CR049/07.jpg","images/CR049/08.jpg"],
 CR048:["images/CR048/01.png","images/CR048/02.jpg","images/CR048/03.jpg","images/CR048/04.jpg","images/CR048/05.jpg","images/CR048/06.jpg","images/CR048/07.jpg","images/CR048/08.jpg"],
 CR047:["images/CR047/01.png","images/CR047/02.jpg","images/CR047/03.jpg","images/CR047/04.jpg","images/CR047/05.jpg","images/CR047/06.jpg","images/CR047/07.jpg","images/CR047/08.jpg"],
 CR046:["images/CR046/01.png","images/CR046/02.jpg","images/CR046/03.jpg","images/CR046/04.jpg","images/CR046/05.jpg","images/CR046/06.jpg","images/CR046/07.jpg","images/CR046/08.jpg"],
 "CR044 / CR062":["images/CR044/01.png","images/CR044/02.jpg","images/CR044/03.jpg","images/CR044/04.jpg","images/CR044/05.jpg","images/CR044/06.jpg","images/CR044/07.jpg","images/CR044/08.jpg"],
 CR043:["images/CR043/01.png","images/CR043/02.jpg","images/CR043/03.jpg","images/CR043/04.jpg","images/CR043/05.jpg","images/CR043/06.jpg","images/CR043/07.jpg","images/CR043/08.jpg"],
 CR042:["images/CR042/01.png","images/CR042/02.jpg","images/CR042/03.jpg","images/CR042/04.jpg","images/CR042/05.jpg","images/CR042/06.jpg","images/CR042/07.jpg","images/CR042/08.jpg"],
 CR004:["images/CR004/01.png"],
 CR041:["images/CR041/01.jpg","images/CR041/02.jpg","images/CR041/03.jpg","images/CR041/04.jpg","images/CR041/05.jpg","images/CR041/06.jpg","images/CR041/07.jpg"],
 CR040:["images/CR040/01.png","images/CR040/02.jpg","images/CR040/03.jpg","images/CR040/04.jpg","images/CR040/05.jpg","images/CR040/06.jpg","images/CR040/07.jpg","images/CR040/08.jpg"],
 CR038:["images/CR038/01.jpg","images/CR038/02.jpg","images/CR038/03.jpg","images/CR038/04.jpg","images/CR038/05.jpg","images/CR038/06.jpg","images/CR038/07.jpg","images/CR038/08.jpg"],
 CR037:["images/CR037/01.jpg","images/CR037/02.png","images/CR037/03.png","images/CR037/04.jpg","images/CR037/05.jpg","images/CR037/06.jpg","images/CR037/07.jpg","images/CR037/08.jpg"],
 CR035:["images/CR035/01.jpg","images/CR035/02.jpg","images/CR035/03.jpg","images/CR035/04.jpg","images/CR035/05.jpg","images/CR035/06.jpg","images/CR035/07.jpg","images/CR035/08.jpg"],
 CR039:["images/CR035/01.jpg","images/CR035/02.jpg","images/CR035/03.jpg","images/CR035/04.jpg","images/CR035/05.jpg","images/CR035/06.jpg","images/CR035/07.jpg","images/CR035/08.jpg"],
 CR034:["images/CR034/1.jpg","images/CR034/2.jpg","images/CR034/3.jpg","images/CR034/4.jpg","images/CR034/5.jpg","images/CR034/6.jpg","images/CR034/7.jpg","images/CR034/8.jpg"],
 CR031:["images/CR031/01.jpeg","images/CR031/02.avif","images/CR031/03.avif","images/CR031/04.avif","images/CR031/05.avif","images/CR031/06.avif","images/CR031/07.avif","images/CR031/08.avif"],
 CR006:["images/CR006/01.png","images/CR006/02.jpg","images/CR006/03.jpg","images/CR006/04.jpg","images/CR006/05.jpg","images/CR006/06.jpg","images/CR006/07.jpg","images/CR006/08.jpg"],
 CR007:["images/CR007/01.png","images/CR007/02.jpg","images/CR007/03.jpg","images/CR007/04.jpg","images/CR007/05.jpg","images/CR007/06.jpg","images/CR007/07.jpg","images/CR007/3.jpg"],
 CR011:["images/CR011/01.png","images/CR011/02.avif","images/CR011/03.avif","images/CR011/04.avif","images/CR011/05.avif","images/CR011/06.avif","images/CR011/07.avif","images/CR011/08.avif"],
 "CR008 / CR009 / CR010":["images/CR011/01.png","images/CR011/02.avif","images/CR011/03.avif","images/CR011/04.avif","images/CR011/05.avif","images/CR011/06.avif","images/CR011/07.avif","images/CR011/08.avif"],
 CR005:["images/CR005/01.png","images/CR005/02.jpg","images/CR005/03.jpg","images/CR005/04.jpg","images/CR005/05.jpg","images/CR005/06.jpg","images/CR005/07.jpg","images/CR005/08.jpg"],
 CR014:["images/CR014/01.png","images/CR014/02.avif","images/CR014/03.jpg","images/CR014/04.avif","images/CR014/05.avif","images/CR014/06.jpg","images/CR014/07.jpg","images/CR014/08.jpeg"],
 "CR015 / CR016 / CR017":["images/CR014/01.png","images/CR014/02.avif","images/CR014/03.jpg","images/CR014/04.avif","images/CR014/05.avif","images/CR014/06.jpg","images/CR014/07.jpg","images/CR014/08.jpeg"],
 CR018:["images/CR018/01.png","images/CR018/02.avif","images/CR018/03.avif","images/CR018/04.avif","images/CR018/05.avif","images/CR018/06.avif","images/CR018/07.avif","images/CR018/08.avif"],
 CR013:["images/CR013/01.webp","images/CR013/02.jpg","images/CR013/03.webp","images/CR013/04.jpg","images/CR013/05.jpg","images/CR013/06.webp","images/CR013/07.webp","images/CR013/08.webp"],
 CR012:["images/CR012/01.png","images/CR012/02.jpg","images/CR012/03.avif","images/CR012/04.jpg","images/CR012/05.jpg","images/CR012/06.jpg","images/CR012/07.jpg","images/CR012/08.jpg"],
 CR032:["images/CR032/01.png","images/CR032/02.avif","images/CR032/03.avif","images/CR032/04.avif","images/CR032/05.avif","images/CR032/06.png","images/CR032/07.avif","images/CR032/08.avif"],
 CR003:["images/CR003/01.png","images/CR003/02.jpg","images/CR003/03.png","images/CR003/04.jpg","images/CR003/05.jpg","images/CR003/06.jpg","images/CR003/07.jpg","images/CR003/08.jpg"],
 CR033:["images/CR033/01.png","images/CR033/02.jpg","images/CR033/03.jpg","images/CR033/04.jpg","images/CR033/05.jpg","images/CR033/06.jpg","images/CR033/07.jpg","images/CR033/08.jpg"],
 CR001:["images/CR001/01.png","images/CR001/02.jpg","images/CR001/03.jpg","images/CR001/04.jpg","images/CR001/05.jpg","images/CR001/06.jpg","images/CR001/07.jpg","images/CR001/08.jpg"],
 CR002:["images/CR002/01.jpg","images/CR002/02.jpg","images/CR002/03.jpg","images/CR002/04.jpg","images/CR002/05.jpg","images/CR002/06.jpg","images/CR002/07.jpg","images/CR002/08.jpg"],
 CR025:["images/CR025/01.png","images/CR025/02.avif","images/CR025/03.avif","images/CR025/04.avif","images/CR025/05.jpg","images/CR025/06.avif","images/CR025/07.avif","images/CR025/08.avif"],
 CR024:["images/CR024/01.png","images/CR024/02.avif","images/CR024/03.avif","images/CR024/04.avif","images/CR024/05.avif","images/CR024/06.avif","images/CR024/07.avif","images/CR024/08.avif"],
 CR023:["images/CR023/01.png","images/CR023/02.avif","images/CR023/03.avif","images/CR023/04.avif","images/CR023/05.png","images/CR023/06.avif","images/CR023/07.avif","images/CR023/08.avif"],
 CR022:["images/CR022/01.png","images/CR022/02.jpg","images/CR022/03.avif","images/CR022/04.jpg","images/CR022/05.jpg","images/CR022/06.jpg","images/CR022/07.jpg","images/CR022/08.jpg"],
 "CR021 / CR045":["images/CR021/01.png","images/CR021/02.jpg","images/CR021/03.jpg","images/CR021/04.jpg","images/CR021/05.jpg","images/CR021/06.jpg","images/CR021/07.jpg","images/CR021/08.jpg"],
 CR045:["images/CR021/01.png","images/CR021/02.jpg","images/CR021/03.jpg","images/CR021/04.jpg","images/CR021/05.jpg","images/CR021/06.jpg","images/CR021/07.jpg","images/CR021/08.jpg"],
 CR020:["images/CR020/01.jpg","images/CR020/02.jpg","images/CR020/03.jpg","images/CR020/04.jpg","images/CR020/05.jpg","images/CR020/06.jpg","images/CR020/07.jpg"],
 CR026:["images/CR026/01.png","images/CR026/02.avif","images/CR026/03.avif","images/CR026/04.avif","images/CR026/05.avif","images/CR026/06.avif","images/CR026/07.avif","images/CR026/08.avif"],
 CR029:["images/CR029/01.png","images/CR029/02.avif","images/CR029/03.avif","images/CR029/04.avif","images/CR029/05.avif","images/CR029/06.avif","images/CR029/07.avif"],
 CR030:["images/CR030/01.png","images/CR030/02.avif","images/CR030/03.avif","images/CR030/04.png","images/CR030/05.avif","images/CR030/06.avif","images/CR030/07.avif","images/CR030/08.avif"],
 "CR028 / CR064":["images/CR028/01.png","images/CR028/02.avif","images/CR028/03.avif","images/CR028/04.avif","images/CR028/05.avif","images/CR028/06.avif","images/CR028/07.avif","images/CR028/08.avif"],
 CR036:["images/CR028/01.png","images/CR028/02.avif","images/CR028/03.avif","images/CR028/04.avif","images/CR028/05.avif","images/CR028/06.avif","images/CR028/07.avif","images/CR028/08.avif"],
 "CR108 / CR110":["images/CR108/01.jpg","images/CR108/02.jpg","images/CR108/03.jpg","images/CR108/04.jpg","images/CR108/05.jpg","images/CR108/06.jpg","images/CR108/07.jpg","images/CR108/08.jpg"],
 "CR109 / CR111 / CR112 / CR113":["images/CR108/01.jpg","images/CR108/02.jpg","images/CR108/03.jpg","images/CR108/04.jpg","images/CR108/05.jpg","images/CR108/06.jpg","images/CR108/07.jpg","images/CR108/08.jpg"],
 CR114:["images/CR114/01.jpg","images/CR114/02.jpg","images/CR114/03.jpg","images/CR114/04.jpg","images/CR114/05.jpg","images/CR114/06.jpg","images/CR114/07.jpg","images/CR114/08.jpg"],
 CR068:["images/CR068/01.jpg","images/CR068/02.jpg","images/CR068/03.jpg","images/CR068/04.jpg","images/CR068/05.jpg","images/CR068/06.jpg","images/CR068/07.jpg","images/CR068/08.jpg"],
 CR069:["images/CR069/01.jpg","images/CR069/02.jpg","images/CR069/03.jpg","images/CR069/04.jpg","images/CR069/05.jpg","images/CR069/06.jpg","images/CR069/07.jpg","images/CR069/08.jpg"],
 CR070:["images/CR070/01.jpg","images/CR070/02.jpg","images/CR070/03.jpg","images/CR070/04.jpg","images/CR070/05.jpg","images/CR070/06.jpg","images/CR070/07.jpg","images/CR070/08.jpg"],
 CR115:["images/CR115/01.png","images/CR115/02.jpg","images/CR115/03.jpg","images/CR115/04.jpg","images/CR115/05.jpg","images/CR115/06.jpg","images/CR115/07.jpg","images/CR115/08.jpg"],
 CR116:["images/CR030/01.png","images/CR030/02.avif","images/CR030/03.avif","images/CR030/04.png","images/CR030/05.avif","images/CR030/06.avif","images/CR030/07.avif","images/CR030/08.avif"],
 CR117:["images/CR117/main.png","images/CR031/01.jpeg","images/CR031/02.avif","images/CR031/03.avif","images/CR031/04.avif","images/CR031/05.avif","images/CR031/06.avif","images/CR031/07.avif","images/CR031/08.avif"],
 CR027:["images/CR027/01.jpg","images/CR027/02.jpg","images/CR027/03.jpg","images/CR027/04.jpg","images/CR027/05.jpg","images/CR027/06.jpg","images/CR027/07.jpg","images/CR027/08.jpg"],
 CR019:['images/CR019/01.png','images/CR019/02.avif','images/CR019/03.avif','images/CR019/04.avif','images/CR019/05.avif','images/CR019/06.avif','images/CR019/07.avif','images/CR019/08.avif']
};
function productGallery(code,item){
 const images=productImages[code];
 if(!images)return '';
 const label=item[0]+' '+item[1]+' '+item[2]+'–'+item[3]+' — '+code;
 return '<div class="product-gallery" aria-label="'+label+' photos"><a class="product-gallery-main" href="'+images[0]+'" onclick="openPhotoViewer(this);return false" aria-label="Enlarge product photo"><img src="'+images[0]+'" alt="'+label+' — photo 1 of '+images.length+'" decoding="async"></a><div class="product-thumbnails">'+images.map((src,i)=>'<button type="button" class="product-thumbnail" aria-label="Show photo '+(i+1)+' of '+images.length+'" aria-pressed="'+(i===0)+'" data-src="'+src+'" data-alt="'+label+' — photo '+(i+1)+' of '+images.length+'" data-number="'+(i+1)+'" onclick="selectProductPhoto(this)"><img src="'+src+'" alt="" loading="lazy" decoding="async"></button>').join('')+'</div><div class="product-photo-count" aria-live="polite">Photo 1 of '+images.length+' · Click image to enlarge</div></div>';
}
function selectProductPhoto(button){
 const gallery=button.closest('.product-gallery'),link=gallery.querySelector('.product-gallery-main'),image=link.querySelector('img');
 link.href=button.dataset.src;image.src=button.dataset.src;image.alt=button.dataset.alt;
 gallery.querySelectorAll('.product-thumbnail').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 gallery.querySelector('.product-photo-count').textContent='Photo '+button.dataset.number+' of '+gallery.querySelectorAll('.product-thumbnail').length+' · Click image to enlarge';
}

const photoViewer=document.querySelector('#photoViewer');
let viewerPhotos=[],viewerIndex=0,viewerTrigger=null,viewerOverflow='';
function renderViewerPhoto(){
 const photo=viewerPhotos[viewerIndex];
 const image=document.querySelector('#photoViewerImage');
 image.src=photo.dataset.src;image.alt=photo.dataset.alt;
 document.querySelector('#photoViewerCount').textContent='Photo '+(viewerIndex+1)+' of '+viewerPhotos.length;
 document.querySelector('#previousPhoto').disabled=viewerPhotos.length<2;
 document.querySelector('#nextPhoto').disabled=viewerPhotos.length<2;
}
function openPhotoViewer(link){
 viewerTrigger=link;
 viewerPhotos=[...link.closest('.product-gallery').querySelectorAll('.product-thumbnail')];
 viewerIndex=Math.max(0,viewerPhotos.findIndex(photo=>photo.getAttribute('aria-pressed')==='true'));
 renderViewerPhoto();
 viewerOverflow=document.body.style.overflow;
 document.body.style.overflow='hidden';
 photoViewer.showModal();
}
function moveViewerPhoto(step){
 viewerIndex=(viewerIndex+step+viewerPhotos.length)%viewerPhotos.length;
 renderViewerPhoto();
}
document.querySelector('#closePhotoViewer').onclick=()=>photoViewer.close();
document.querySelector('#previousPhoto').onclick=()=>moveViewerPhoto(-1);
document.querySelector('#nextPhoto').onclick=()=>moveViewerPhoto(1);
photoViewer.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
  event.preventDefault();moveViewerPhoto(event.key==='ArrowLeft'?-1:1);
 }
});
photoViewer.addEventListener('click',event=>{
 if(event.target===photoViewer){
  const bounds=photoViewer.getBoundingClientRect();
  if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)photoViewer.close();
 }
});
photoViewer.addEventListener('close',()=>{
 document.body.style.overflow=viewerOverflow;
 if(viewerTrigger&&viewerTrigger.isConnected)viewerTrigger.focus({preventScroll:true});
});
window.addEventListener('hashchange',()=>{if(photoViewer.open)photoViewer.close()});

function card(x,detail=false){
 const key=encodeURIComponent(JSON.stringify(x));
 const memory=String(x[5]||'').match(/(\d+)\s*GB\s*\/\s*(\d+)\s*GB/i);
 const remaining=String(x[5]||'').replace(/\d+\s*GB\s*\/\s*\d+\s*GB/i,'').replace(/^[\s•·]+|[\s•·]+$/g,'');
 const chip='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>';
 const disk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 10c0 4 16 4 16 0M4 15c0 4 16 4 16 0"/></svg>';
 const cpu=remaining.match(/(?:\d+\s*[- ]?\s*core|quad[- ]?core|octa[- ]?core)/i);
 const ramIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2" y="5" width="20" height="12" rx="2"/><path d="M5 17v3m4-3v3m6-3v3m4-3v3M6 9v4m4-4v4m4-4v4m4-4v4"/></svg>';
 const cpuBadge=cpu?'<div class="memory-spec">'+chip+'<strong>'+cpu[0].replace(/\s+/g,'')+'</strong><span>CPU</span></div>':'';
 const memoryBadges=memory?'<div class="memory-specs">'+cpuBadge+'<div class="memory-spec">'+ramIcon+'<strong>'+memory[1]+'GB</strong><span>RAM</span></div><div class="memory-spec">'+disk+'<strong>'+memory[2]+'GB</strong><span>Storage</span></div></div>':'';
 const specs=cpu?remaining.replace(cpu[0],'').replace(/^[\s•·]+|[\s•·]+$/g,''):remaining;
 const compatibility=detail===true&&x[7]==="CR070"?'<p class="fitment-note"><strong>Fitment:</strong> Original rear-view cameras and rear headrest entertainment screens may not be compatible. Confirm your factory radio and connections before ordering.</p>':detail===true&&x[7]==="CR069"?'<p class="fitment-note"><strong>JBL amplifier systems:</strong> An additional compatible wiring harness with protocol box is required and is not included. Confirm your original radio and connections before ordering.</p>':detail===true&&x[7]==="CR027"?'<p class="fitment-note"><strong>Fitment:</strong> For vehicles without a factory amplifier (AMP) only. Confirm the shape and size of your original radio and center console before ordering; not all dashboard styles are compatible. Contact us if unsure.</p>':detail===true&&x[7]==="CR011"&&x[1]==="Corolla"?'<p>Does not fit Corolla E12 (2000–2006).</p>':"";
 const codes=x[7]||"";
 const priced=typeof x[6]==='number' && isFinite(x[6]);
 const price=priced?'$'+x[6].toFixed(2)+' CAD':'Contact for price';
 const sold=x[8]==='sold';
 const soldCodes=Array.isArray(x[9])?x[9]:[];
 const available=codes.split(' / ').filter(Boolean).length-soldCodes.length;
 const availability=!sold && (available>1||soldCodes.length)?'<div class="muted"><b>'+available+' available'+(soldCodes.length?' · '+soldCodes.length+' sold ('+soldCodes.join(', ')+')':'')+'</b></div>':'';
 const button=sold?'<span class="sold-label">SOLD</span>':priced?'<button class="add-cart" data-key="'+key+'" onclick="addProduct(this.dataset.key)">🛒 &nbsp; Add to Cart</button>':'';
 const name=x[0]+' '+x[1];
 const detailPath=encodeURIComponent(codes)+(stock.filter(item=>item[7]===codes).length>1?'/'+encodeURIComponent(name):'');
 const title=productImages[codes]?'<a class="product-name" href="#product/'+detailPath+'"><b>'+name+'</b></a>':'<b>'+name+'</b>';
 const photo=detail!==true && productImages[codes]?'<a class="card-photo" href="#product/'+detailPath+'" aria-label="View '+name+' photos"><img src="'+productImages[codes][0]+'" alt="'+name+'" loading="lazy" decoding="async"></a>':'';
 return '<div class="card'+(photo?' card-with-photo':'')+'">'+'<div class="card-heading">'+title+'<div class="card-years">'+x[2]+'–'+x[3]+'</div><div class="card-screen">'+x[4]+' CarPlay Screen</div></div>'+photo+'<div class="card-info">'+memoryBadges+'<div class="muted cpu-spec">'+specs+'</div><div class="muted"><b>Code:</b> '+codes+'</div>'+availability+'<div class="price">'+price+'</div>'+compatibility+'</div>'+'<div class="product-actions">'+button+'<button type="button" class="share-product" data-key="'+key+'" onclick="shareProduct(this)" aria-label="Share product"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m9 10 6-4M9 14l6 4"/></svg><span>Share</span></button></div></div>';
}

async function shareProduct(button){
 const x=JSON.parse(decodeURIComponent(button.dataset.key));
 const path=productImages[x[7]]?'/products/'+[x[7].split(' / ')[0],x[0],x[1],x[2],x[3]].join('-').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'/':'/#product/'+encodeURIComponent(x[7]);
 const url='https://isc-carplay.ca'+path;
 const title=x[0]+' '+x[1]+' '+x[2]+'–'+x[3]+' | ISC CarPlay';
 if(navigator.share){
  try{await navigator.share({title,url});return;}catch(error){if(error.name==='AbortError')return;}
 }
 try{
  await navigator.clipboard.writeText(url);
  const label=button.querySelector('span');label.textContent='Copied!';
  setTimeout(()=>{label.textContent='Share';},2500);
 }catch(error){window.prompt('Copy this product link:',url);}
}

function updateCart(){try{sessionStorage.setItem('isc-cart',JSON.stringify(cart))}catch{};document.querySelector("#cartCount").textContent=cart.reduce((n,x)=>n+(x.qty||1),0)}
function addItem(item){let f=cart.find(x=>x.key===item.key);if(f)f.qty++;else{item.qty=1;cart.push(item)}updateCart()}
function openCart(){renderCart();document.querySelector("#cartModal").style.display="block"}
function closeCart(){document.querySelector("#cartModal").style.display="none"}


function quoteLines(items){
 const used=new Set();
 return items.map(item=>{
  if(!Number.isSafeInteger(item.qty)||item.qty<1||item.qty>10)throw new Error('Please check the quantities in your cart.');
  if(item.key==='installation')return item.qty+' × CarPlay / Android Auto Installation — $'+(200*item.qty).toFixed(2)+' CAD';
  if(item.key==='dashcam-installation')return item.qty+' × Dashcam Installation — $'+(150*item.qty).toFixed(2)+' CAD';
  let row;try{const requested=JSON.parse(item.key.slice(2));row=stock.find(x=>JSON.stringify(x)===JSON.stringify(requested));}catch{}
  if(!row||row[8]==='sold')throw new Error('An item changed or is sold out. Remove it and select an available product.');
  const codes=row[7].split(' / ').filter(c=>!(row[9]||[]).includes(c)&&!used.has(c));
  if(item.qty>codes.length)throw new Error('Not enough stock for '+row[0]+' '+row[1]+'. Please reduce the quantity.');
  codes.slice(0,item.qty).forEach(c=>used.add(c));
  return item.qty+' × '+row[0]+' '+row[1]+' '+row[2]+'–'+row[3]+' ['+codes.slice(0,item.qty).join(' / ')+'] — $'+(row[6]*item.qty).toFixed(2)+' CAD';
 });
}
const CHECKOUT_API='https://isc-carplay-checkout.mr1world2wide.workers.dev';
async function startCheckout(event){
 event.preventDefault();const error=document.querySelector('#quoteError'),button=event.submitter;error.textContent='';
 try{
  quoteLines(cart);if(!cart.length)throw new Error('Your cart is empty.');
  const items=cart.map(x=>({key:x.key,qty:x.qty}));const fingerprint=JSON.stringify(items);
  let pending;try{pending=JSON.parse(sessionStorage.getItem('isc-checkout')||'null')}catch{}
  if(!pending||pending.fingerprint!==fingerprint)pending={id:crypto.randomUUID(),fingerprint};
  sessionStorage.setItem('isc-checkout',JSON.stringify(pending));updateCart();button.disabled=true;button.textContent='Opening secure payment…';
  const res=await fetch(CHECKOUT_API+'/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({requestId:pending.id,items}),signal:AbortSignal.timeout(25000)});
  const data=await res.json();if(!res.ok){if(res.status===409)sessionStorage.removeItem('isc-checkout');throw new Error(data.error||'Payment is unavailable. Please try again.');}
  const target=new URL(data.url);if(target.origin!=='https://checkout.stripe.com')throw new Error('Unexpected payment address.');
  location.assign(target.href);
 }catch(e){error.textContent=e.name==='TimeoutError'?'Connection timed out. Please try again.':e.message;button.disabled=false;button.textContent='Pay now';}
}
async function checkPaymentReturn(){
 const query=new URLSearchParams(location.search);if(!query.has('checkout'))return;
 const panel=document.createElement('div');panel.className='notice';panel.setAttribute('role','status');document.querySelector('main').prepend(panel);
 if(query.get('checkout')==='cancelled'){panel.textContent='Payment was not completed. Your cart is saved.';updateCart();return;}
 panel.textContent='Checking payment…';
 try{const res=await fetch(CHECKOUT_API+'/status?session_id='+encodeURIComponent(query.get('session_id')||''),{signal:AbortSignal.timeout(25000)});const data=await res.json();if(!res.ok)throw Error();
 if(data.paid){panel.textContent='Payment received: $'+(data.total/100).toFixed(2)+' CAD. Pickup: 460 Dundas St E, Waterdown, ON L8B 2A5. Call 905-638-2020 to arrange a time.';cart=[];sessionStorage.removeItem('isc-checkout');updateCart();}
 else{panel.textContent='Payment is not confirmed yet. Please check your Stripe receipt or call 905-638-2020 before trying again.';}
 }catch{panel.textContent='Unable to confirm payment right now. Please check your Stripe receipt or call 905-638-2020 before paying again.';}
}
updateCart();checkPaymentReturn();

function renderCart(){
 const b=document.querySelector("#cartItems"),t=document.querySelector("#cartTotal");
 document.querySelector("#quoteForm").hidden=!cart.length;
 if(!cart.length){b.innerHTML='<div class="empty">Your cart is empty.</div>';t.innerHTML='';return;}
 b.innerHTML=cart.map((x,i)=>'<div class="cart-item"><div class="cart-line"><b>'+x.name+'</b><b>$'+(x.price*x.qty).toFixed(2)+' CAD</b></div><div class="cart-actions"><button onclick="qty('+i+',-1)">−</button><b>'+x.qty+'</b><button onclick="qty('+i+',1)">+</button><button class="remove" onclick="removeItem('+i+')">Remove</button></div></div>').join('');
 const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 const subtotalCents=Math.round(total*100),taxCents=Math.round(subtotalCents*0.13);
 t.innerHTML='<div class="cart-total"><span>Subtotal</span><span>$'+total.toFixed(2)+' CAD</span></div><div class="cart-total"><span>HST (13%)</span><span>$'+(taxCents/100).toFixed(2)+' CAD</span></div><div class="cart-total"><span>Pickup</span><span>Free</span></div><div class="cart-total"><span>Total</span><span>$'+((subtotalCents+taxCents)/100).toFixed(2)+' CAD</span></div>';
}
function qty(i,d){cart[i].qty+=d;if(cart[i].qty<1)cart.splice(i,1);updateCart();renderCart();}
function removeItem(i){cart.splice(i,1);updateCart();renderCart();}
function addProduct(key){const d=JSON.parse(decodeURIComponent(key));const item=stock.find(x=>JSON.stringify(x)===JSON.stringify(d));if(!item||item[8]==='sold')return;addItem({key:"p:"+JSON.stringify(d),name:d[0]+" "+d[1],price:d[6]});}
function addService(){addItem({key:"installation",name:"CarPlay / Android Auto Installation",price:200});}
function addDashcamService(){addItem({key:"dashcam-installation",name:"Dashcam Installation",price:150});}
var activeYearRange='',yearRangeContext='';
function render(){
 document.querySelectorAll('.brand').forEach(x=>x.classList.remove('active'));
 const context=[M.value,D.value,Y.value].join('|');
 if(context!==yearRangeContext){activeYearRange='';yearRangeContext=context;}
 const base=stock.filter(x=>(!M.value||x[0]===M.value)&&(!D.value||x[1]===D.value));
 const panel=document.querySelector('#yearRangeFilter');
 panel.replaceChildren();panel.hidden=!(M.value||D.value);
 if(!panel.hidden){
  const heading=document.createElement('h2');heading.textContent=[M.value,D.value].filter(Boolean).join(' ');
  const hint=document.createElement('p');hint.textContent=D.value?'Select a year range to see available CarPlay screens.':'Select your model, then choose a year range.';
  const buttons=document.createElement('div');buttons.className='year-range-buttons';
  const models=document.createElement('div');models.className='year-range-buttons';models.style.marginBottom='12px';models.setAttribute('aria-label','Select vehicle model');
  [...new Set(stock.filter(x=>x[0]===M.value).map(x=>x[1]))].sort().forEach(model=>{const button=document.createElement('button');button.type='button';button.textContent=model;button.setAttribute('aria-pressed',String(D.value===model));button.onclick=()=>{D.value=model;Y.value='';activeYearRange='';render();};models.appendChild(button);});
  const ranges=[...new Set(base.map(x=>x[2]+'–'+x[3]))].sort((a,b)=>parseInt(a)-parseInt(b)||a.localeCompare(b));
  if(D.value)['',...ranges].forEach(range=>{const button=document.createElement('button');button.type='button';button.textContent=range||'All Years';button.setAttribute('aria-pressed',String(range===(activeYearRange||'')));button.setAttribute('aria-controls','results');button.onclick=()=>{Y.value='';yearRangeContext=[M.value,D.value,''].join('|');activeYearRange=range;render();};buttons.appendChild(button);});
  panel.append(heading,hint,models);if(D.value)panel.append(buttons);
 }
 const a=base.filter(x=>(!Y.value||(+Y.value>=x[2]&&+Y.value<=x[3]))&&(!activeYearRange||x[2]+'–'+x[3]===activeYearRange));
 R.innerHTML=(M.value||D.value||Y.value)?(a.length?a.map(card).join(''):'<div class="notice">No matching screen is currently listed.</div>'):'';
}
function showPage(page){document.querySelector("#productPage").style.display="none";if(location.pathname!=="/"||location.hash.startsWith("#product/"))history.replaceState(null,"","/#"+page);const services=page==="services",about=page==="about",brands=!services&&!about;document.querySelector("#brandsPage").style.display=brands?"block":"none";document.querySelector("#servicesPage").style.display=services?"block":"none";document.querySelector("#aboutPage").style.display=about?"block":"none";document.querySelector("#brandsTab").classList.toggle("active",brands);document.querySelector("#servicesTab").classList.toggle("active",services);document.querySelector("#aboutTab").classList.toggle("active",about);}
function openAIChat(){const p=document.querySelector("#chatPanel");p.style.display="block";setTimeout(()=>document.querySelector("#chatInput").focus(),100)}
function toggleChat(){const p=document.querySelector("#chatPanel");p.style.display=p.style.display==="block"?"none":"block";if(p.style.display==="block")setTimeout(()=>document.querySelector("#chatInput").focus(),100)}
const CHAT_ENDPOINT="https://isc-carplay-ai.mr1world2wide.workers.dev/";
let chatBusy=false;
const chatHistory=[];
function chatBubble(text,who){
 const d=document.createElement("div");d.className="bubble "+who;d.textContent=text;
 d.style.whiteSpace="pre-wrap";
 const body=document.querySelector("#chatBody");body.appendChild(d);body.scrollTop=body.scrollHeight;
 return d;
}
function setChatBusy(busy){
 chatBusy=busy;
 document.querySelectorAll(".chat-compose button, #chatPhoto").forEach(el=>el.disabled=busy);
 document.querySelector("#chatBody").setAttribute("aria-busy",String(busy));
}
function workerMessage(message){
 // The deployed Worker accepts one message (up to 2,000 characters), not a messages array.
 const current="Current customer message:\n"+message;
 const context=chatHistory.join("\n").slice(-Math.max(0,1900-current.length));
 return context?"Recent conversation:\n"+context+"\n\n"+current:message;
}
async function requestChat(message,image){
 const pending=chatBubble(image?"Analyzing your photo…":"Thinking…","bot");
 const controller=new AbortController();
 const timeout=setTimeout(()=>controller.abort(),60000);
 try{
  const payload={message:workerMessage(message)};
  if(image)payload.image=image;
  const response=await fetch(CHAT_ENDPOINT,{
   method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify(payload),signal:controller.signal,credentials:"omit"
  });
  const data=await response.json();
  if(!response.ok||data.ok===false||typeof data.reply!=="string"||!data.reply.trim())throw new Error("Invalid AI response");
  pending.textContent=data.reply.trim();
  chatHistory.push("Customer: "+message,"Assistant: "+data.reply.trim());
  while(chatHistory.length>8)chatHistory.splice(0,2);
 }catch(error){
  pending.textContent=error.name==="AbortError"?"The reply took too long. Please try again.":"Sorry, the assistant couldn't reply. Please try again or call 905-638-2020.";
  const retry=document.createElement("button");retry.type="button";retry.textContent="Retry";
  retry.style.display="block";
  retry.onclick=async()=>{
   if(chatBusy)return;
   setChatBusy(true);pending.remove();
   try{await requestChat(message,image);}finally{setChatBusy(false);}
  };
  pending.appendChild(retry);
 }finally{
  clearTimeout(timeout);
  const body=document.querySelector("#chatBody");body.scrollTop=body.scrollHeight;
 }
}
async function sendPhoto(input){
 const file=input.files&&input.files[0];input.value="";
 if(!file||chatBusy)return;
 if(!/^image\/(jpeg|jpg|png|webp)$/i.test(file.type)){chatBubble("Please choose a JPEG, PNG or WebP photo.","bot");return;}
 // Base64 expands the file; stay below the Worker's 8,000,000-character limit.
 if(file.size>5_900_000){chatBubble("Photo is too large. Please choose a photo smaller than 5.9 MB.","bot");return;}
 const field=document.querySelector("#chatInput"),caption=field.value.trim();
 if(caption.length>1500){chatBubble("Please keep your message under 1,500 characters.","bot");return;}
 setChatBusy(true);
 try{
  const image=await new Promise((resolve,reject)=>{
   const reader=new FileReader();
   reader.onload=()=>resolve(reader.result);
   reader.onerror=reader.onabort=()=>reject(new Error("Photo read failed"));
   reader.readAsDataURL(file);
  });
  if(typeof image!=="string"||image.length>8_000_000)throw new Error("Photo too large");
  const d=chatBubble(caption||"Dashboard / radio photo","user");
  const img=document.createElement("img");img.className="bubble-photo";img.src=image;img.alt="Uploaded dashboard or radio photo";d.appendChild(img);
  if(field.value.trim()===caption)field.value="";
  await requestChat(caption||"Please analyze this dashboard/radio photo for CarPlay compatibility.",image);
 }catch(error){chatBubble("Couldn't read that photo. Please choose a JPEG, PNG or WebP photo smaller than 5.9 MB and try again.","bot");}
 finally{setChatBusy(false);}
}
async function sendChat(){
 const i=document.querySelector("#chatInput"),q=i.value.trim();if(!q||chatBusy)return;
 if(q.length>1500){chatBubble("Please keep your message under 1,500 characters.","bot");return;}
 setChatBusy(true);chatBubble(q,"user");i.value="";
 try{await requestChat(q);}finally{setChatBusy(false);}
}
M.onchange=loadModels;D.onchange=render;Y.onchange=render;

function routeProduct(){
 const prefix='#product/';
 if(!location.hash.startsWith(prefix) && !location.pathname.startsWith('/products/')){
  if(document.querySelector('#productPage').style.display==='block'){
   document.querySelector('#productPage').style.display='none';
   showPage(location.hash==='#services'?'services':location.hash==='#about'?'about':'brands');
   if(R.firstElementChild)R.scrollIntoView({block:'start'});
  }
  return;
 }
 const [code,vehicle]=location.hash.slice(prefix.length).split('/');
 const item=location.pathname.startsWith('/products/')?stock.find(x=>productUrl(x)===location.pathname):stock.find(x=>(encodeURIComponent(x[7])===code || x[7].split(' / ').some(c=>encodeURIComponent(c)===code)) && productImages[x[7]] && (!vehicle||encodeURIComponent(x[0]+' '+x[1])===vehicle));
 if(!item){history.replaceState(null,'','#brands');showPage('brands');return;}
 document.querySelector('#brandsPage').style.display='none';
 document.querySelector('#servicesPage').style.display='none';
 document.querySelector('#aboutPage').style.display='none';
 document.querySelector('#productPage').style.display='block';
 document.querySelector('#brandsTab').classList.add('active');
 document.querySelector('#servicesTab').classList.remove('active');
 document.querySelector('#aboutTab').classList.remove('active');
 const title=document.querySelector('#productTitle');
 title.textContent=item[0]+' '+item[1];
 document.querySelector('#productDetails').innerHTML=productGallery(item[7],item)+card(item,true).replace(/<a class="product-name"[^>]*>(.*?)<\/a>/,'$1');
 window.scrollTo(0,0);title.focus({preventScroll:true});
}
window.addEventListener('hashchange',routeProduct);
routeProduct();

updateCart();
if(location.pathname==='/services/')showPage('services');if(location.pathname==='/about/')showPage('about');