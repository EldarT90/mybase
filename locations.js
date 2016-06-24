var hu = "http://l2wiki.com/c/images/a/aa/Skill_4416_6.jpg";
var un = "https://l2wiki.com/c/images/9/91/Skill_4416_1.jpg";
var sp = "https://l2wiki.com/c/images/a/a8/Skill_4416_7.jpg";
var ma = "https://l2wiki.com/c/images/d/d3/Skill_4416_2.jpg";
var de = "https://l2wiki.com/c/images/d/d3/Skill_4416_2.jpg";
var fa = "https://l2wiki.com/c/images/8/87/Skill_4416_13.jpg";
var an = "https://l2wiki.com/c/images/8/8c/Skill_4416_4.jpg";
var gi = "https://l2wiki.com/c/images/7/77/Skill_4416_11.jpg";
var bu = "https://l2wiki.com/c/images/d/d3/Skill_4416_12.jpg";
var be = "https://l2wiki.com/c/images/2/27/Skill_4416_3.jpg";
var pl = "https://l2wiki.com/c/images/2/25/Skill_4416_5.jpg";
var dr = "https://l2wiki.com/c/images/6/6d/Skill_4416_10.jpg"
var de = "https://l2wiki.com/c/images/8/8b/Skill_4416_9.jpg";
var x2 = "https://l2wiki.com/c/images/8/84/Skill_4408_10.jpg";
var x3 = "https://l2wiki.com/c/images/5/57/Skill_4408_11.jpg";
var x4 = "https://l2wiki.com/c/images/d/d5/Skill_4408_12.jpg";
var x5 = "https://l2wiki.com/c/images/f/fc/Skill_4408_13.jpg";
var x6 = "https://l2wiki.com/c/images/a/a1/Skill_4408_14.jpg";
var x7 = "https://l2wiki.com/c/images/5/59/Skill_4408_15.jpg";
var x8 = "https://l2wiki.com/c/images/d/d9/Skill_4408_16.jpg";
var x12 = "https://l2wiki.com/c/images/8/89/Skill_4408_20.jpg"
var sx12 = "https://l2wiki.com/c/images/0/0e/Skill_4408_9.jpg";
var ra = "https://l2wiki.com/c/images/a/a4/Skill_4494_1.jpg";
var ep = "https://l2wiki.com/c/images/c/ca/Skill_4062_1.jpg";

$("#abandonedCamp").hoverIntent(
  function() {
   $("#townName").html("Abandoned Camp");
   $("#territory").html("Gludio Territory");
   $("#description").html("A campsite of the Gracian army when they were invading Aden. This place served as a stronghold on their march, but was abandoned as the army retreated at the end of the war. It has since been turned into a stronghold for the Ol Mahum.");  
 $("#imgInfo").attr("src","http://s33.postimg.org/g8qn6xdzz/image.jpg"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Ol Mahum Novice</td><td>17</td><td><img class=features src=" + hu + " /&gt;</td><td>749</td></tr><tr><td>Ol Mahum Patrol</td><td>21</td><td><img class=features src=" + hu + " /&gt;</td><td>945</td></tr><tr><td>Ol Mahum Recruit</td><td>21</td><td><img class=features src=" + hu + " /&gt;</td><td>941</td></tr><tr><td>Ol Mahum Guard</td><td>22</td><td><img class=features src=" + hu + " /&gt;</td><td>1019</td></tr><tr><td>Ol Mahum Straggler</td><td>23</td><td><img class=features src=" + hu + " /&gt;</td><td>1087</td></tr><tr><td>Ol Mahum Supplier</td><td>23</td><td><img class=features src=" + hu + " /&gt;</td><td>1082</td></tr><tr><td>Ol Mahum Sergeant</td><td>24</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2148</td></tr><tr><td>Ol Mahum Shooter</td><td>24</td><td><img class=features src=" + hu + " /&gt;</td><td>1157</td></tr><tr><td>Ol Mahum Officer</td><td>25</td><td><img class=features src=" + hu + " /&gt;</td><td>1232</td></tr><tr><td>Ol Mahum General</td><td>26</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2437</td></tr><tr><td>Ol Mahum Commander</td><td>29</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2867</td></tr></table>");     
  }
);

$("#forgottenTemple").hoverIntent(
  function() {
   $("#townName").html("Forgotten Temple");
   $("#territory").html("Gludio Territory");
   $("#description").html("A temple in Gludio territory. Strangely enough, the inside is the same structure as the Elven Ruins in Talking Island. According to some records, it is said that there were experiments on transfer/operation of magic performed in this region.");  
 $("#imgInfo").attr("src","http://orig09.deviantart.net/ec6c/f/2008/166/a/1/lineage_ii___forgotten_temple_by_l2zerk.jpg"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Kuran Kobold</td><td>27</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " ></td><td>2088</td></tr><tr><td>Lafi Lizardman</td><td>27</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2077</td></tr><tr><td>Kuran Kobold Warrior</td><td>28</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2202</td></tr><tr><td>Lafi Lizardman Scout</td><td>28</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2210</td></tr><tr><td>Fire Archer</td><td>29</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>3151</td></tr><tr><td>Patin Archer</td><td>29</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>2320</td></tr><tr><td>Ritmal Swordsman</td><td>29</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>2320</td></tr><tr><td>Roxide's Follower</td><td>29</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>3151</td></tr><tr><td>Salamander Lakin</td><td>30</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>2455</td></tr><tr><td>Undine Lakin</td><td>30</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>2693</td></tr><tr><td>Watchman of Fire</td><td>31</td><td><img class=features src=" + ma + " /> <img class=features src=" + x2 + " /></td><td>2613</td></tr><tr><td>Watchman of Water</td><td>31</td><td><img class=features src=" + ma + " /> <img class=features src=" + x2 + " /></td><td>2622</td></tr><tr><td>Death Fire</td><td>32</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /></td><td>7193</td></tr><tr><td>Dre Vanul Warrior</td><td>32</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /></td><td>2784</td></tr><tr><td>Kanil Succubus</td><td>32</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /></td><td>2784</td></tr><tr><td>Roxide</td><td>32</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /></td><td>7193</td></tr><tr><td>Salamander Rowin</td><td>33</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>2971</td></tr><tr><td>Undine Rowin</td><td>33</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>2971</td></tr><tr><td>Tirak</td><td>28</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>758k</td></tr></table>");     
  }
);

$("#ruinsOfDespair").hoverIntent(
  function() {
   $("#townName").html("Ruins of Despair");
   $("#territory").html("Gludio Territory");
   $("#description").html("Roston village used to be in this place. Along with Bernice village, Roston village was one of the largest farming villages in the continent. But it lost most of the lands during the war of Beleth and the remaining lands during the war of Gracia.");  
 $("#imgInfo").attr("src","http://lineage.gtacity.cz/wp-content/uploads/Shot01640.jpg"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Shield Skeleton</td><td>15</td><td><img class=features src=" + un+ " /></td><td>663</td></tr><tr><td>Skeleton Infantryman</td><td>16</td><td><img class=features src=" + un+ " /> </td><td>708</td></tr><tr><td>Ruin Imp</td><td>17</td><td><img class=features src=" + fa + "  /> </td><td>752</td></tr><tr><td>Scavenger Bat</td><td>18</td><td><img class=features src=" + an + " /> </td><td>794</td></tr><tr><td>Ratman Warrior</td><td>19</td><td><img class=features src=" + hu+ " /> </td><td>842</td></tr><tr><td>Zombie Soldier</td><td>19</td><td><img class=features src=" + un + " /></td><td>969</td></tr><tr><td>Poisonous Thornleg</td><td>20</td><td><img class=features src=" + bu + " /></td><td>884</td></tr><tr><td>Ruin Bat</td><td>20</td><td><img class=features src=" + an + "  /></td><td>884</td></tr><tr><td>Monster Eye Watchman</td><td>21</td><td><img class=features src=" + ma + " /> </td><td>941</td></tr><tr><td>Ruin Imp Elder</td><td>21</td><td><img class=features src=" + fa + " /></td><td>949</td></tr><tr><td>Monster Eye Patrol</td><td>22</td><td><img class=features src=" + ma + " /></td><td>1019</td></tr><tr><td>Zombie Warrior</td><td>22</td><td><img class=features src=" + un + "  /></td><td>1173</td></tr><tr><td>Ol Mahum Deserter</td><td>23</td><td><img class=features src=" + hu + " /> </td><td>1087</td></tr><tr><td>Veelan Bugbear</td><td>23</td><td><img class=features src=" + gi + " /></td><td>1082</td></tr><tr><td>Veelan Bugbear Warr.</td><td>24</td><td><img class=features src=" + gi + " /> </td><td>1161</td></tr><tr><td>Zombie Lord Crowl</td><td>25</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /></td><td>498k</td></tr></table>");    
  }
);

$("#antNest").hoverIntent(
  function() {
   $("#townName").html("Ant Nest");
   $("#territory").html("Gludio Territory");
   $("#description").html("This place swarms with ants which have become giants become of magical breath of Beleth. They dug a huge cave in the heart of the wild Wasteland and now live there in a big colony, protecting their queen.");  
 $("#imgInfo").attr("src","http://orig04.deviantart.net/3b33/f/2008/166/6/9/lineage_ii___ant_queen_nest_by_l2zerk.jpg"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Ant Larva</td><td>29</td><td><img class=features src=" + bu + " /></td><td>1274</td></tr><tr><td>Ant</td><td>30</td><td><img class=features src=" + bu+ " /> </td><td>1301</td></tr><tr><td>Ant Captain</td><td>31</td><td><img class=features src=" + bu+ " /></td><td>1389</td></tr><tr><td>Ant Overseer</td><td>32</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>2784</td></tr><tr><td>Ant Recruit</td><td>33</td><td><img class=features src=" + bu + " /></td><td>1623</td></tr><tr><td>Ant Patrol</td><td>34</td><td><img class=features src=" + bu + " /></td><td>1711</td></tr><tr><td>Ant Guard</td><td>35</td><td><img class=features src=" + bu + " /></td><td>1808</td></tr><tr><td>Ant Soldier</td><td>35</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>3281</td></tr><tr><td>Ant Warrior Captain</td><td>36</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>3478</td></tr><tr><td>Noble Ant</td><td>37</td><td><img class=features src=" + bu + " /></td><td>2020</td></tr><tr><td>Noble Ant Captain</td><td>38</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>3926</td></tr><tr><td>Queen Ant</td><td>40</td><td><img class=features src=" + bu + " /> <img class=features src=" + ep + " /> </td><td>2.17kk</td></tr></table>");    
  }
);

$("#orcBarracks").hoverIntent(
  function() {
   $("#townName").html("Orc Barracks");
   $("#territory").html("Gludio Territory");
   $("#description").html("A campsite of Turek Orcs who were hired during Gracia-Aden war. Now affected by the energies of otherworldly dimensions leaking through the dimensional rift, the orcs are said to be ruthlessly capturing the sprites that have mutated in Windy Hill.");  
 $("#imgInfo").attr("src","http://s33.postimg.org/fatanmfrj/orc_B.jpg"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Turek War Hound</td><td>24</td><td><img class=features src=" + an + " /> <img class=features src=" + x2 + " /></td><td>1748</td></tr><tr><td>Turek Orc Sentinel</td><td>25</td><td><img class=features src=" + hu + " /> <img class=features src=" +x2 + " /></td><td>1852</td></tr><tr><td>Turek Orc Footman</td><td>26</td><td><img class=features src=" + hu + " /> <img class=features src=" +x2 + " /></td><td>1872</td></tr><tr><td>Turek Orc Archer</td><td>27</td><td><img class=features src=" + hu  + " /> <img class=features src=" + x2 + " /></td><td>2077</td></tr><tr><td>Turek Orc Supplier</td><td>27</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2088</td></tr><tr><td>Turek Orc Skirmisher</td><td>28</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2210</td></tr><tr><td>Turek Orc Priest</td><td>29</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2333</td></tr><tr><td>Turek Orc Prefect</td><td>30</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>2455</td></tr><tr><td>Turek Orc Elder</td><td>34</td><td><img class=features src=" + hu + " /> </td><td>1722</td></tr><tr><td>Turek Mercenary Capt.</td><td>30</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>975k</td></tr><tr><td>Chertuba of Great Soul</td><td>35</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr></table>");  
  }
);

$("#wasteland").hoverIntent(
  function() {
   $("#townName").html("Wasteland");
   $("#territory").html("Gludio Territory");
   $("#description").html("A fertile farmland once, it became a wasteland due to the powerful magic cast in order to seal Beleth. Also because of the impact of the magic from that time, insects and crustacean creatures mutated into bizarre shapes.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/9/96/Wasteland%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Monster Eye Watcher</td><td>25</td><td><img class=features src=" + ma + " /> </td><td>1222</td></tr><tr><td>Monster Eye Destroyer</td><td>26</td><td><img class=features src=" + ma + " /> </td><td>1301</td></tr><tr><td>Lesser Basilisk</td><td>27</td><td><img class=features src=" + be + " /> </td><td>1382</td></tr><tr><td>Basilisk</td><td>28</td><td><img class=features src=" + be  + " /> </td><td>1451</td></tr><tr><td>Androscorpio</td><td>29</td><td><img class=features src=" + be + " /> </td><td>1539</td></tr><tr><td>Skeleton Marauder</td><td>29</td><td><img class=features src=" + un + " /> </td><td>1544</td></tr><tr><td>Ant</td><td>30</td><td><img class=features src=" + bu + " /></td><td>1301</td></tr><tr><td>Skeleton Raider</td><td>30</td><td><img class=features src=" + un + " /> </td><td>1625</td></tr><tr><td>Ant Captain</td><td>31</td><td><img class=features src=" + bu + " /> </td><td>1389</td></tr><tr><td>Granite Golem</td><td>33</td><td><img class=features src=" + ma + " /> </td><td>2367</td></tr><tr><td>Young Gigantiops</td><td>33</td><td><img class=features src=" + bu + " /> </td><td>1705</td></tr><tr><td>Puncher</td><td>34</td><td><img class=features src=" + ma + " /></td><td>2402</td></tr><tr><td>Ant Soldier</td><td>35</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>3281</td></tr><tr><td>Gigantiops</td><td>35</td><td><img class=features src=" + bu + " /></td><td>1900</td></tr><tr><td>Tyrant</td><td>35</td><td><img class=features src=" + be + " /></td><td>2212</td></tr><tr><td>Ant Warrior Captain</td><td>36</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /></td><td>3478</td></tr><tr><td>Elder Tyrant</td><td>36</td><td><img class=features src=" + be + " /></td><td>2340</td></tr><tr><td>Giant Wasteland Basilisk</td><td>30</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /></td><td>975k</td></tr><tr><td>Ragraman</td><td>30</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>975k</td></tr><tr><td>Gargoyle Lord Sirocco</td><td>35</td><td><img class=features src=" + ma + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr></table>");  
  }
);

$("#ruinsOfAgony").hoverIntent(
  function() {
   $("#townName").html("Ruins of Agony");
   $("#territory").html("Gludio Territory");
   $("#description").html("Long ago there was a prosperous village of Bernis there. The villages of Bernis and Roston owned best croplands in the vicinity. Most of the lands were lost during Beleth's rebellion and the rest during the war with Gracia.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/7/7a/Ruins_of_Agony%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Ruin Zombie</td><td>15</td><td><img class=features src=" + un + " /> </td><td>763</td></tr><tr><td>Ruin Zombie Leader</td><td>16</td><td><img class=features src=" + un + " /> </td><td>793</td></tr><tr><td>Skeleton Tracker</td><td>17</td><td><img class=features src=" + un + " /> </td><td>752</td></tr><tr><td>Skeleton Tracker Capt.</td><td>18</td><td><img class=features src=" + un  + " /> </td><td>794</td></tr><tr><td>Ratman Warrior</td><td>18</td><td><img class=features src=" + hu + " /> </td><td>842</td></tr><tr><td>Skeleton Scout</td><td>18</td><td><img class=features src=" + un+ " /> </td><td>835</td></tr><tr><td>Poisonous Thornleg</td><td>20</td><td><img class=features src=" + bu + " /></td><td>884</td></tr><tr><td>Skeleton Bowman</td><td>20</td><td><img class=features src=" + un + " /> </td><td>877</td></tr><tr><td>Monster Eye Watchman</td><td>21</td><td><img class=features src=" + ma + " /> </td><td>941</td></tr><tr><td>Ruin Spartoi</td><td>21</td><td><img class=features src=" + un + " /> </td><td>941</td></tr><tr><td>Monster Eye Patrol</td><td>22</td><td><img class=features src=" + ma + " /> </td><td>1019</td></tr><tr><td>Raging Spartoi</td><td>22</td><td><img class=features src=" + un + " /></td><td>1011</td></tr><tr><td>Ol Mahum Deserter</td><td>23</td><td><img class=features src=" + hu + " /> </td><td>1087</td></tr><tr><td>Tumran Bugbear</td><td>23</td><td><img class=features src=" + gi + " /></td><td>1082</td></tr><tr><td>Tumran Bugbear Warr.</td><td>24</td><td><img class=features src=" + gi + " /></td><td>1161</td></tr><tr><td>Soul Scavenger</td><td>25</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /></td><td>499k</td></tr></table>");  
  }
);

$("#crumaTower").hoverIntent(
  function() {
   $("#townName").html("Cruma Tower");
   $("#territory").html("Dion Territory");
   $("#description").html("Giants made this fortress to use as a research center to study Cruma. But a divine animal of the earth Cruma disappeared at the end of Giants era, and this research center and its by-products are still remaining.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/e8hke3yzf/Cruma_T.jpg"); 
  $("#quests").html("Monsters");
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Porta</td><td>40</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>6819</td></tr><tr><td>Excuro</td><td>41</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>6682</td></tr><tr><td>Catherok</td><td>42</td><td><img class=features src=" + hu + " /> <img class=features src=" + x3 + " /></td><td>6930</td></tr><tr><td>Mordeo</td><td>42</td><td><img class=features src=" + be  + " /> <img class=features src=" + x3 + " /></td><td>7192</td></tr><tr><td>Snipe's Subordinate</td><td>42</td><td><img class=features src=" + be + " /> <img class=features src=" + x3 + " /></td><td>9686</td></tr><tr><td>Ricenseo</td><td>43</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>7322</td></tr><tr><td>Krator</td><td>44</td><td><img class=features src=" + ma + " /> <img class=features src=" + x4 + " /></td><td>10510</td></tr><tr><td>Shindebarn</td><td>44</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>7606</td></tr><tr><td>Snipe</td><td>44</td><td><img class=features src=" + be + " /> <img class=features src=" + x5 + " /></td><td>31163</td></tr><tr><td>Premo</td><td>45</td><td><img class=features src=" + gi + " /> <img class=features src=" + x3 + " /></td><td>8383</td></tr><tr><td>Validus</td><td>46</td><td><img class=features src=" + be + " /> <img class=features src=" + x3 + " /></td><td>8412</td></tr><tr><td>Dicor</td><td>47</td><td><img class=features src=" + pl + " /> <img class=features src=" + x3 + " /></td><td>9007</td></tr><tr><td>Ossiud</td><td>47</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>9500</td></tr><tr><td>Dark Knight</td><td>48</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>13022</td></tr><tr><td>Perum</td><td>48</td><td><img class=features src=" + gi + " /> <img class=features src=" + x4 + " /></td><td>12507</td></tr><tr><td>Liangma</td><td>49</td><td><img class=features src=" + ma + " /> <img class=features src=" + x3 + " /></td><td>9433</td></tr><tr><td>Soldier of Darkness</td><td>49</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>13942</td></tr><tr><td>Torfe</td><td>49</td><td><img class=features src=" + be + " /> <img class=features src=" + x3 + " /></td><td>9790</td></tr><tr><td>Dark Lord</td><td>50</td><td><img class=features src=" + un + " /> <img class=features src=" + x5 + " /></td><td>40805</td></tr><tr><td>Death Knight</td><td>50</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>10916</td></tr><tr><td>Archon Susceptor</td><td>45</td><td><img class=features src=" + ma + " /> <img class=features src=" + ra + " /></td><td>5.05kk</td></tr><tr><td>Core</td><td>50</td><td><img class=features src=" + ma + " /> <img class=features src=" + ep + " /></td><td>2.04kk</td></tr></table>");  
  }
);

$("#soda").hoverIntent(
  function() {
   $("#townName").html("School of Dark Arts");
   $("#territory").html("Oren Territory");
   $("#description").html("An underground complex found on the western coastline of the Oren territory. It was once a place of research, but now stands abandoned and empty, home only to strange monsters and the adventurers that fight them to test their valor.");  
 $("#imgInfo").attr("src","http://s32.postimg.org/c841iw505/So_DA.jpg"); 
  $("#quests").html("Monsters");
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Vaiss Orc</td><td>10</td><td><img class=features src=" + hu + " /></td><td>449</td></tr><tr><td>Vaiss Orc Warr. Capt.</td><td>11</td><td><img class=features src=" + hu + " /> </td><td>495</td></tr><tr><td>Skeleton Hunter</td><td>12</td><td><img class=features src=" + un + " /> </td><td>541</td></tr><tr><td>Cave Bat</td><td>13</td><td><img class=features src=" + an + " /> </td><td>585</td></tr><tr><td>Skeleton Hunter Archer</td><td>13</td><td><img class=features src=" + un + " /></td><td>588</td></tr><tr><td>Doom Soldier</td><td>14</td><td><img class=features src=" + un + " /></td><td>631</td></tr><tr><td>Misery Skeleton</td><td>14</td><td><img class=features src=" + un + " /> </td><td>631</td></tr><tr><td>Cave Spider</td><td>15</td><td><img class=features src=" + bu + " /></td><td>676</td></tr><tr><td>Cave Fang Spider</td><td>16</td><td><img class=features src=" +  bu + " /> </td><td>722</td></tr><tr><td>Onyx Beast</td><td>17</td><td><img class=features src=" + be + " /></td><td>766</td></tr><tr><td>Contortion of Lunacy</td><td>18</td><td><img class=features src=" + un + " /></td><td>915</td></tr><tr><td>Stink Zombie</td><td>19</td><td><img class=features src=" + un + " /> </td><td>970</td></tr><tr><td>Lesser Succubus</td><td>20</td><td><img class=features src=" + de + " /> </td><td>899</td></tr><tr><td>Merkenis' Escort</td><td>20</td><td><img class=features src=" + un + " /> </td><td>906</td></tr><tr><td>Lesser Succubus Turen</td><td>21</td><td><img class=features src=" + de + " /> </td><td>778</td></tr><tr><td>Lesser Succubus Tilfo</td><td>22</td><td><img class=features src=" + de + " /></td><td>836</td></tr></table>");  
  }
);

$("#executionGrounds").hoverIntent(
  function() {
   $("#townName").html("Execution Grounds");
   $("#territory").html("Dion Territory");
   $("#description").html("This is the place where Duke Ashton during the Dion Peasant Revolt cruelly and publicly executed all of the local farmers he suspected of being involved in the uprising. Duke Ashton had his executioner Guilotine behead all involved in the riots.");  
 $("#imgInfo").attr("src","http://vignette3.wikia.nocookie.net/echoesofdarkness/images/3/32/EG_Center.jpg/revision/latest?cb=20100530151551"); 
  $("#quests").html("Monsters"); 
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Mandragora Blossom</td><td>25</td><td><img class=features src=" + pl + " /></td><td>1232</td></tr><tr><td>Specter</td><td>26</td><td><img class=features src=" + un + " /> </td><td>1308</td></tr><tr><td>Sorrow Maiden</td><td>27</td><td><img class=features src=" + sp + " /> </td><td>1377</td></tr><tr><td>Neer Crawler</td><td>28</td><td><img class=features src=" + un  + " /></td><td>1463</td></tr><tr><td>Neer Crawler Bers.</td><td>29</td><td><img class=features src=" + un + " /></td><td>1544</td></tr><tr><td>Amber Basilisk</td><td>30</td><td><img class=features src=" + be + " /></td><td>1612</td></tr><tr><td>Strain</td><td>31</td><td><img class=features src=" + un + " /> </td><td>1735</td></tr><tr><td>Ghoul</td><td>32</td><td><img class=features src=" + un + " /></td><td>2128</td></tr><tr><td>Granite Golem</td><td>33</td><td><img class=features src=" +  ma + " /> </td><td>2367</td></tr><tr><td>Corpse Tracker</td><td>34</td><td><img class=features src=" + an + " /></td><td>2080</td></tr><tr><td>Hangman Tree</td><td>35</td><td><img class=features src=" + pl + " /></td><td>2205</td></tr><tr><td>Watchman Guillotine</td><td>35</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr><tr><td>Soul Collector Acheron</td><td>35</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr><tr><td>Evil Spirit Tempest</td><td>36</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>2.16kk</td></tr></table>");  
  }
);

$("#elvenFortress").hoverIntent(
  function() {
   $("#townName").html("Elven Fortress");
   $("#territory").html("Oren Territory");
   $("#description").html("During the war between Humans and Elves, this bomb shelter was built as a fortress in order to stand the final battle. Since then, this place has been used as a major stronghold during the wars with Dark Elves.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/3kdb8e5vf/elf.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Baraq Orc Warrior</td><td>10</td><td><img class=features src=" + hu + " /></td><td>450</td></tr><tr><td>Barraq Orc Warr. Capt.</td><td>11</td><td><img class=features src=" + hu + " /&gt; </td><td>495</td></tr><tr><td>Dungeon Skeleton Sol.</td><td>12</td><td><img class=features src=" + un + " /&gt; </td><td>541</td></tr><tr><td>Dungeon Skeleton Arc.</td><td>13</td><td><img class=features src=" + un  + " /&gt;</td><td>588</td></tr><tr><td>Dread Soldier</td><td>14</td><td><img class=features src=" + un + " /&gt;</td><td>631</td></tr><tr><td>Mist Terror</td><td>15</td><td><img class=features src=" + un + " /&gt;</td><td>676</td></tr><tr><td>Dark Terror</td><td>16</td><td><img class=features src=" + un + " /&gt; </td><td>722</td></tr><tr><td>Shade Terror</td><td>17</td><td><img class=features src=" + un + " /&gt;</td><td>766</td></tr><tr><td>Sukar Ratman</td><td>18</td><td><img class=features src=" +  hu + " /&gt; </td><td>810</td></tr><tr><td>Sukar Ratman Captain</td><td>19</td><td><img class=features src=" + hu + " /&gt;</td><td>862</td></tr><tr><td>Dre Vanul Tracker</td><td>20</td><td><img class=features src=" + de + " /&gt;</td><td>901</td></tr><tr><td>Dre Vanul Beholder</td><td>21</td><td><img class=features src=" + de + " /&gt; </td><td>778</td></tr><tr><td>Kirunak's Escort</td><td>21</td><td><img class=features src=" + un + " /&gt; </td><td>783</td></tr><tr><td>Dre Vanul Slayer</td><td>22</td><td><img class=features src=" + de + " /&gt; </td><td>836</td></tr></table>");  
  }
);

$("#partisan").hoverIntent(
  function() {
   $("#townName").html("Partisans Hideaway");
   $("#territory").html("Dion Territory");
   $("#description").html("This place is where mercenaries who were hired by Gracia at the time of the war with Gracia still remain. The war has ended now. And they became a group of thieves to torment the village people.");  
 $("#imgInfo").attr("src","https://mmozg.net/uploads/images/00/00/01/2013/03/19/dbf747_origin.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Ol Mahum Supp. Troop</td><td>23</td><td><img class=features src=" + hu + " /&gt;</td><td>1082</td></tr><tr><td>Ol Mahum Shooter</td><td>24</td><td><img class=features src=" + hu + " /&gt; </td><td>1157</td></tr><tr><td>Ol Mahum Guerilla</td><td>26</td><td><img class=features src=" + hu + " /&gt; </td><td>1940</td></tr><tr><td>Ol Mahum Raider</td><td>27</td><td><img class=features src=" + hu + " /&gt;</td><td>2043</td></tr><tr><td>Ol Mahum Sniper</td><td>28</td><td><img class=features src=" + hu + " /&gt;</td><td>2174</td></tr><tr><td>Ol Mahum Lieutenant</td><td>29</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2282</td></tr><tr><td>Ol Mahum Captain</td><td>30</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2415</td></tr><tr><td>Talakin Raider</td><td>31</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2695</td></tr><tr><td>Talakin Commander</td><td>32</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>2856</td></tr><tr><td>Ol Mahum Lord</td><td>34</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>3103</td></tr><tr><td>Partisan Com. Talakin</td><td>28</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>758k</td></tr><tr><td>Cat's Eye</td><td>30</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>975k</td></tr><tr><td>Nurka's Messenger</td><td>33</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.47kk</td></tr><tr><td>Flame Lord Shadar</td><td>35</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr><tr><td>Red Eye Captain Trakia</td><td>35</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>1.91kk</td></tr></table>");  
  }
);

$("#elvenRuins").hoverIntent(
  function() {
   $("#townName").html("Elven Ruins");
   $("#territory").html("Gludio Territory");
   $("#description").html("An underground labyrinth found on Talking Island. During their golden age, Elves built this place to teach the Humans how to use magic. Since the war, this place had been left to decay, and is now used as a monster lair.");  
 $("#imgInfo").attr("src","http://vignette2.wikia.nocookie.net/echoesofdarkness/images/f/f2/ElvenRuinsEntry01.jpg/revision/latest?cb=20100212212811"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Relic Werewolf</td><td>9</td><td><img class=features src=" + hu + " /></td><td>406</td></tr><tr><td>Monster Eye</td><td>10</td><td><img class=features src=" + ma + " /> </td><td>449</td></tr><tr><td>Tunath Orc Marksman</td><td>10</td><td><img class=features src=" + hu + " /> </td><td>449</td></tr><tr><td>Vampire Bat</td><td>10</td><td><img class=features src=" + an + " /></td><td>449</td></tr><tr><td>Clawed Bat</td><td>11</td><td><img class=features src=" + an + " /></td><td>495</td></tr><tr><td>Skeleton</td><td>12</td><td><img class=features src=" + un + " /> </td><td>541</td></tr><tr><td>Tunath Orc Warr. Capt.</td><td>12</td><td><img class=features src=" + hu + " /> </td><td>544</td></tr><tr><td>Skeleton Archer</td><td>12</td><td><img class=features src=" + un + " /> </td><td>585</td></tr><tr><td>Stone Giant</td><td>13</td><td><img class=features src=" + ma + " /> </td><td>662</td></tr><tr><td>Misery Skeleton</td><td>14</td><td><img class=features src=" + un + " /> </td><td>631</td></tr><tr><td>Skeleton Marksman</td><td>14</td><td><img class=features src=" + un + " /> </td><td>631</td></tr><tr><td>Dungeon Spider</td><td>15</td><td><img class=features src=" + bu + " /> </td><td>676</td></tr><tr><td>Skeleton Lord</td><td>15</td><td><img class=features src=" + un + " /></td><td>680</td></tr><tr><td>Ratman</td><td>16</td><td><img class=features src=" + hu + " /></td><td>720</td></tr><tr><td>Silent Horror</td><td>16</td><td><img class=features src=" + un + " /> </td><td>722</td></tr><tr><td>Cave Blade Spider</td><td>17</td><td><img class=features src=" + bu + " /></td><td>766</td></tr><tr><td>Forgotten Watchman</td><td>17</td><td><img class=features src=" + ma + " /> <img class=features src=" + sx12 + " /></td><td>316</td></tr><tr><td>Salamander Noble</td><td>19</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>1580</td></tr><tr><td>Undine Noble</td><td>19</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /></td><td>1580</td></tr><tr><td>Dre Vanul</td><td>20</td><td><img class=features src=" + de + " /></td><td>901</td></tr><tr><td>Dre Vanul Watchman</td><td>21</td><td><img class=features src=" + de + " /></td><td>778</td></tr><tr><td>Relic Spartoi</td><td>21</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>1403</td></tr><tr><td>Dre Vanul Disposer</td><td>22</td><td><img class=features src=" + de + " /></td><td>836</td></tr></table>");  
  }
);

$("#deathPass").hoverIntent(
  function() {
   $("#townName").html("Death Pass");
   $("#territory").html("Giran Territory");
   $("#description").html("The name originated from the saying that a person will die upon stepping on Elven Forest or Dragon Valley located on each side of the road that connects the south and north. But the road itself is actually very safe because of the sentry posts nearby.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/rvvszsxrf/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Wyrm</td><td>35</td><td><img class=features src=" + dr + " /></td><td>2212</td></tr><tr><td>Guardian Basilisk</td><td>36</td><td><img class=features src=" + be + " /> </td><td>2332</td></tr><tr><td>Road Scavenger</td><td>37</td><td><img class=features src=" + hu + " /></td><td>2464</td></tr><tr><td>Fettered Soul</td><td>38</td><td><img class=features src=" + an + " /> <img class=features src=" + x2 + " /></td><td>4834</td></tr><tr><td>Windsus</td><td>39</td><td><img class=features src=" + an + " /></td><td>2737</td></tr><tr><td>Grandis</td><td>49</td><td><img class=features src=" + gi + " /> </td><td>2880</td></tr><tr><td>Road Scav. Leader</td><td>49</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>3.45kk</td></tr></table>");  
  }
);

$("#dragonValley").hoverIntent(
  function() {
   $("#townName").html("Dragon Valley");
   $("#territory").html("Giran Territory");
   $("#description").html("Soldiers of Aden who tried to get inside Antharas’ Lair died miserably in this Valley. Antharas disciples gathered the bones of the fallen and used terrible curses to bring them back. Now all adventurers who want to enter Lair have to fight them first.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/d6dteytmz/Dr_V.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Shackle</td><td>45</td><td><img class=features src=" + un + " /></td><td>3627</td></tr><tr><td>Cave Servant</td><td>46</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>5852</td></tr><tr><td>Cave Servant Archer</td><td>47</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>6112</td></tr><tr><td>Cave Servant Warrior</td><td>48</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>9162</td></tr><tr><td>Dragon Bearer Archer</td><td>48</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>8576</td></tr><tr><td>Dragon Bearer Warrior</td><td>48</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /></td><td>8581</td></tr><tr><td>Cave Servant Captain</td><td>49</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>9545</td></tr><tr><td>Dragon Bearer Captain</td><td>49</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /></td><td>24928</td></tr><tr><td>Headless Knight</td><td>50</td><td><img class=features src=" + un + " /> <img class=features src=" + x4 + " /></td><td>13242</td></tr><tr><td>Royal Cave Servant</td><td>51</td><td><img class=features src=" + un + " /> <img class=features src=" + x4 + " /></td><td>13901</td></tr><tr><td>Hunter Gargoyle</td><td>52</td><td><img class=features src=" + ma + " /> <img class=features src=" + x4 + " /></td><td>14588</td></tr><tr><td>Dustwind Gargoyle</td><td>53</td><td><img class=features src=" + ma + " /> <img class=features src=" + x4 + " /></td><td>15148</td></tr><tr><td>Thunder Wyrm</td><td>54</td><td><img class=features src=" + dr + " /> <img class=features src=" + x4 + " /></td><td>15812</td></tr><tr><td>Maluk Succubus</td><td>55</td><td><img class=features src=" + de + " /> <img class=features src=" + x4 + " /></td><td>16320</td></tr><tr><td>Maluk Succubus Turen</td><td>56</td><td><img class=features src=" + de + " /> <img class=features src=" + x5 + " /></td><td>20486</td></tr><tr><td>Drake</td><td>57</td><td><img class=features src=" + dr + " /> <img class=features src=" + x5 + " /></td><td>21431</td></tr><tr><td>Cave Keeper</td><td>58</td><td><img class=features src=" + be + " /> <img class=features src=" + x5 + " /></td><td>21976</td></tr><tr><td>Cave Maiden</td><td>59</td><td><img class=features src=" + be + " /> <img class=features src=" + x6 + " /></td><td>24394</td></tr><tr><td>Blood Queen</td><td>60</td><td><img class=features src=" + de + " /> <img class=features src=" + x6 + " /></td><td>24865</td></tr><tr><td>Cave Banshee</td><td>60</td><td><img class=features src=" + de + " /> <img class=features src=" + x5 + " /></td><td>45666</td></tr><tr><td>Skyla</td><td>32</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /></td><td>1.29kk</td></tr><tr><td>Necrosentinel Guard</td><td>47</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /></td><td>6.04kk</td></tr><tr><td>Cursed Clara</td><td>50</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /></td><td>7.73kk</td></tr><tr><td>Beleth' Seer Sephia</td><td>55</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>8.13kk</td></tr><tr><td>Black Lily</td><td>55</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /></td><td>8.13kk</td></tr><tr><td>Ancient Weird Drake</td><td>60</td><td><img class=features src=" + dr + " /> <img class=features src=" + ra + " /></td><td>8.51kk</td></tr><tr><td>Lord Ishka</td><td>60</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /></td><td>8.51kk</td></tr></table>");  
  }
);

$("#elvenForest").hoverIntent(
  function() {
   $("#townName").html("Elven Forest");
   $("#territory").html("Oren Territory");
   $("#description").html("The Elven Settlement around the Mother Tree. Mysterious ancient creatures live there together with the Elves. Elven Forest may seem peaceful at first sight, however it's full of creatures who have escaped from the Sea of Spores confinement.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/9/94/Elven_Forest%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Gray Wolf</td><td>4</td><td><img class=features src=" + an + " /&gt;</td><td>176</td></tr><tr><td>Goblin Raider</td><td>5</td><td><img class=features src=" + hu + " /&gt;  </td><td>220</td></tr><tr><td>Kaboo Orc Soldier</td><td>7</td><td><img class=features src=" + hu + " /&gt; </td><td>308</td></tr><tr><td>Green Dryad</td><td>8</td><td><img class=features src=" + fa + " /&gt; </td><td>352</td></tr><tr><td>Kaboo Orc Archer</td><td>8</td><td><img class=features src=" + hu + " /&gt; </td><td>352</td></tr><tr><td>Spore Fungus</td><td>9</td><td><img class=features src=" + pl + " /&gt; </td><td>398</td></tr><tr><td>Kaboo Orc Warrior</td><td>10</td><td><img class=features src=" + hu + " /&gt; </td><td>438</td></tr><tr><td>Kaboo Orc Warr. Lieut.</td><td>11</td><td><img class=features src=" + hu + " /&gt; </td><td>482</td></tr><tr><td>Kaboo Orc Warr. Capt.</td><td>12</td><td><img class=features src=" + hu + " /&gt; </td><td>526</td></tr><tr><td>Dryad</td><td>13</td><td><img class=features src=" + fa + " /&gt;</td><td>570</td></tr><tr><td>Dryad Elder</td><td>14</td><td><img class=features src=" + fa + " /&gt;</td><td>614</td></tr><tr><td>Crimson Spider</td><td>15</td><td><img class=features src=" + bu + " /&gt;</td><td>663</td></tr><tr><td>Hook Spider</td><td>16</td><td><img class=features src=" + bu + " /&gt; </td><td>708</td></tr><tr><td>Pincer Spider</td><td>17</td><td><img class=features src=" + bu + " /&gt;</td><td>752</td></tr><tr><td>Lirein</td><td>18</td><td><img class=features src=" + sp + " /&gt;</td><td>794</td></tr><tr><td>Lirein Elder</td><td>19</td><td><img class=features src=" + sp + " /&gt;</td><td>842</td></tr></table>");  
  }
);

$("#darkForest").hoverIntent(
  function() {
   $("#townName").html("Dark Forest");
   $("#territory").html("Oren Territory");
   $("#description").html("Long time ago there was a splendid forest. It was destroyed by the curse of the Wooden Elves, perishing at the hands of the Brown Elves. The wasteland was left for a long time after the Brown Elves descended underground.");  
 $("#imgInfo").attr("src","http://gallery.pub.goha.ru/gals/games/lineage2/site/orig/f2c46c00527a25a6c2cdcf061c6c83db.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Balor Orc Archer</td><td>8</td><td><img class=features src=" + hu + " /&gt;</td><td>352</td></tr><tr><td>Goblin Lookout</td><td>8</td><td><img class=features src=" + hu + " /&gt;  </td><td>352</td></tr><tr><td>Green Fungus</td><td>9</td><td><img class=features src=" + pl + " /&gt; </td><td>398</td></tr><tr><td>Balor Orc Warrior</td><td>10</td><td><img class=features src=" + hu + " /&gt; </td><td>442</td></tr><tr><td>Goblin Thief</td><td>10</td><td><img class=features src=" + hu + " /&gt; </td><td>441</td></tr><tr><td>Varika Brigand Leader</td><td>10</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /></td><td>964</td></tr><tr><td>Balor Orc Warr. Lieut.</td><td>11</td><td><img class=features src=" + hu + " /&gt; </td><td>486</td></tr><tr><td>Balor Orc Warr. Capt.</td><td>12</td><td><img class=features src=" + hu + " /&gt; </td><td>530</td></tr><tr><td>Blood Fungus</td><td>12</td><td><img class=features src=" + pl + " /&gt; </td><td>530</td></tr></table>");  
  }
);

$("#crumaMarshlands").hoverIntent(
  function() {
   $("#townName").html("Cruma Marshlands");
   $("#territory").html("Dion Territory");
   $("#description").html("During the period of Giant, this place was used to study Giant Turtle Cruma which is a divine animal of the earth. Now, different types of giant insects and others that are created from the experiments from the Lesser Giant era inhabit here.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/jkgon4pq3/crma.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Giant Mist Leech</td><td>25</td><td><img class=features src=" + bu + " /&gt;</td><td>1228</td></tr><tr><td>Gray Ant</td><td>26</td><td><img class=features src=" + bu + " /&gt;  </td><td>1301</td></tr><tr><td>Mist Horror Ripper</td><td>27</td><td><img class=features src=" + un + " /&gt; </td><td>1382</td></tr><tr><td>Giant Crimson Ant</td><td>28</td><td><img class=features src=" + bu + " /&gt; </td><td>1463</td></tr><tr><td>Marsh Stakato</td><td>29</td><td><img class=features src=" + hu + " /&gt; </td><td>1544</td></tr><tr><td>Weird Wasp</td><td>30</td><td><img class=features src=" + bu + " /&gt;</td><td>1612</td></tr><tr><td>Marsh Stakato Worker</td><td>31</td><td><img class=features src=" + hu + " /&gt; </td><td>1729</td></tr><tr><td>Toad Lord</td><td>32</td><td><img class=features src=" + an + " /&gt; </td><td>1834</td></tr><tr><td>Marsh Stakato Soldier</td><td>33</td><td><img class=features src=" + hu + " /&gt; </td><td>1951</td></tr><tr><td>Marsh Spider</td><td>34</td><td><img class=features src=" + bu + " /&gt;</td><td>2080</td></tr><tr><td>Marsh Stakato Drone</td><td>35</td><td><img class=features src=" + hu + " /&gt;</td><td>2212</td></tr><tr><td>Queen's Royal Guard</td><td>32</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.29kk</td></tr><tr><td>Queen Zyrnna</td><td>34</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.68kk</td></tr><tr><td>Remmel</td><td>35</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.91kk</td></tr><tr><td>Lizardmen Capt. Hellion</td><td>38</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>2.74kk</td></tr></table>");  
  }
);

$("#neutralZone").hoverIntent(
  function() {
   $("#townName").html("Neutral Zone");
   $("#territory").html("Gludio Territory");
   $("#description").html("Non-war zone created by treaty between Elves and Dark Elves from their constant frictions. Upon their agreement, the river of this area became the border between their territories, and the vicinity areas are designated as a neutral zone.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/62edoyssb/image.png"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Scavenger Spider</td><td>15</td><td><img class=features src=" + bu + " /&gt;</td><td>662</td></tr><tr><td>Red Scavenger Spider</td><td>16</td><td><img class=features src=" + bu + " /&gt;  </td><td>708</td></tr><tr><td>Moonstone Beast</td><td>17</td><td><img class=features src=" + be + " /&gt; </td><td>752</td></tr><tr><td>Ratman Scavenger</td><td>18</td><td><img class=features src=" + hu + " /&gt; </td><td>794</td></tr><tr><td>Arachnid Tracker</td><td>19</td><td><img class=features src=" + hu + " /&gt; </td><td>835</td></tr><tr><td>Lycanthrope</td><td>20</td><td><img class=features src=" + hu + " /&gt;</td><td>884</td></tr></table>");  
  }
);

$("#gorgonFG").hoverIntent(
  function() {
   $("#townName").html("Gorgon Flower Garden");
   $("#territory").html("Giran Territory");
   $("#description").html("This place is located between Giran Town and Giran Castle. There are Harpy, Medusa, and the sad victims who became stones after challenging them.");  
 $("#imgInfo").attr("src","http://i.imgur.com/lKjkRPM.png?1"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Turak Bugbear</td><td>31</td><td><img class=features src=" + gi + " /></td><td>1721</td></tr><tr><td>Harpy</td><td>32</td><td><img class=features src=" + be + " /&gt;  </td><td>1843</td></tr><tr><td>Turak Bugbear Warr.</td><td>33</td><td><img class=features src=" + gi + " /> <img class=features src=" + x2 + " /></td><td>3636</td></tr><tr><td>Medusa</td><td>34</td><td><img class=features src=" + be + " /&gt; </td><td>2080</td></tr><tr><td>Wyrm</td><td>35</td><td><img class=features src=" + dr + " /&gt; </td><td>2212</td></tr><tr><td>Beleth' Agent Meana</td><td>30</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /&gt;</td><td>975k</td></tr><tr><td>Sejarr's Servant</td><td>35</td><td><img class=features src=" + an + " /> <img class=features src=" + ra + " /&gt;</td><td>1.91kk</td></tr><tr><td>Nakondas</td><td>40</td><td><img class=features src=" + dr + " /> <img class=features src=" + ra + " /&gt;</td><td>3.45kk</td></tr></table>");  
  }
);

$("#breka").hoverIntent(
  function() {
   $("#townName").html("Breka's Stronghold");
   $("#territory").html("Giran Territory");
   $("#description").html("Nest of Breka Orcs, located in the north region of Giran Territory, guarding the entrance to its capital. These fearsome warriors are well known for their valor as well as magic prowess.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/0/05/Breka%27s_Stronghold%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Amber Basilisk</td><td>30</td><td><img class=features src=" + be + " /&gt;</td><td>1612</td></tr><tr><td>Breka Orc</td><td>31</td><td><img class=features src=" + hu + " /&gt;  </td><td>1721</td></tr><tr><td>Breka Orc Archer</td><td>32</td><td><img class=features src=" + hu + " /&gt; </td><td>1834</td></tr><tr><td>Breka Orc Warrior</td><td>33</td><td><img class=features src=" + hu + " /&gt; </td><td>1966</td></tr><tr><td>Breka Orc Shaman</td><td>34</td><td><img class=features src=" + hu + " /&gt; </td><td>2071</td></tr><tr><td>Breka Orc Prefect</td><td>35</td><td><img class=features src=" + hu + " /&gt; </td><td>2212</td></tr><tr><td>Breka Warlock Pastu</td><td>34</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.68kk</td></tr><tr><td>Tiger King Karuta</td><td>45</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /&gt;</td><td>5.05kk</td></tr></table>");  
  }
);

$("#swampland").hoverIntent(
  function() {
   $("#townName").html("Swampland");
   $("#territory").html("Oren Territory");
   $("#description").html("A huge swampland located in the other side of Dark Forest. Dark Brown Fog is covering this area by Shilen's influence, and red blood is smeared everywhere. High level of monsters that came after the smell of blood are occupying this place.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/0/0e/Swampland%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Festering Bat</td><td>13</td><td><img class=features src=" + an + " /&gt;</td><td>574</td></tr><tr><td>Zombie Forest Elf</td><td>13</td><td><img class=features src=" + un + " /&gt;  </td><td>661</td></tr><tr><td>Stone Giant Soldier</td><td>14</td><td><img class=features src=" + ma + " /&gt; </td><td>693</td></tr><tr><td>Zombie Elf Researcher</td><td>14</td><td><img class=features src=" + un + " /&gt; </td><td>693</td></tr><tr><td>Lesser Dark Horror</td><td>15</td><td><img class=features src=" + un + " /&gt; </td><td>661</td></tr><tr><td>Red Eye Bat</td><td>15</td><td><img class=features src=" + an + " /&gt; </td><td>663</td></tr><tr><td>Dark Horror</td><td>16</td><td><img class=features src=" + un + " /&gt; </td><td>708</td></tr></table>");  
  }
);

$("#seaOfSpores").hoverIntent(
  function() {
   $("#townName").html("Sea of Spores");
   $("#territory").html("Oren Territory");
   $("#description").html("The existing natural ecosystem was destroyed by excessive magical energy concentration. This Sea of Spores is expanding and the wizards of Ivory Tower built barriers near the floats in order to stop the expansion.");  
 $("#imgInfo").attr("src","http://s32.postimg.org/hyatbbpcl/So_S.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Giant Fungus</td><td>40</td><td><img class=features src=" + pl + " /&gt;</td><td>2880</td></tr><tr><td>Giant Monster Eye</td><td>41</td><td><img class=features src=" + ma + " /&gt;  </td><td>3035</td></tr><tr><td>Dire Wyrm</td><td>42</td><td><img class=features src=" + dr + " /&gt; </td><td>3160</td></tr><tr><td>Rotting Tree</td><td>43</td><td><img class=features src=" + pl + " /&gt; </td><td>3312</td></tr><tr><td>Rotting Golem</td><td>44</td><td><img class=features src=" + ma + " /&gt; </td><td>3912</td></tr><tr><td>Trisalim</td><td>45</td><td><img class=features src=" + pl + " /&gt; </td><td>3657</td></tr><tr><td>Trisalim Tarantula</td><td>46</td><td><img class=features src=" + pl + " /&gt; </td><td>3791</td></tr><tr><td>Spore Zombie</td><td>47</td><td><img class=features src=" + un + " /&gt;</td><td>4209</td></tr><tr><td>Orfen</td><td>50</td><td><img class=features src=" + fa + " /> <img class=features src=" + ep + " /&gt;</td><td>8.87kk</td></tr><tr><td>Rotting Tree Repiro</td><td>56</td><td><img class=features src=" + pl + " /> <img class=features src=" + ra + " /&gt;</td><td>8.40kk</td></tr><tr><td>Dread Avenger Kraven</td><td>57</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /&gt;</td><td>8.59kk</td></tr><tr><td>Orfen's Handmaiden</td><td>58</td><td><img class=features src=" + bu + " /> <img class=features src=" + ra + " /&gt;</td><td>8.69kk</td></tr></table>");  
  }
);

$("#alligatorIsland").hoverIntent(
  function() {
   $("#townName").html("Alligator Island");
   $("#territory").html("Giran Territory");
   $("#description").html("A habitat of monstrous Alligators. The number of Alligators has increased dramatically and now they pose a threat to Humans. Innadril Castle has been making efforts to drive the monsters off, but has not yet succeeded.");  
 $("#imgInfo").attr("src","http://s31.postimg.org/cq7t7n6jv/alisl.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Alligator</td><td>40</td><td><img class=features src=" + an + " /&gt;</td><td>2889</td></tr><tr><td>Crokian Lad</td><td>41</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5627</td></tr><tr><td>Dailaon Lad</td><td>42</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5916</td></tr><tr><td>Crokian Lad Warrior</td><td>43</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>6201</td></tr><tr><td>Nos</td><td>43</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>4963</td></tr><tr><td>Farhite Lad</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>6493</td></tr><tr><td>Swamp Alligator</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5417</td></tr><tr><td>Swamp Warrior</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5417</td></tr><tr><td>Nos Lad</td><td>45</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>6762</td></tr><tr><td>Swamp Tribe</td><td>45</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5666</td></tr><tr><td>Panathen</td><td>43</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>4.16kk</td></tr><tr><td>Beacon of Blue Sky</td><td>45</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /&gt;</td><td>5.05kk</td></tr><tr><td>Istary</td><td>45</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>5.05kk</td></tr></table>");  
  }
);

$("#antharasLair").hoverIntent(
  function() {
   $("#townName").html("Antharas' Lair");
   $("#territory").html("Giran Territory");
   $("#description").html("According to the legend, all the Dragons in the world come to this rift before death. In it's deepest cave there lives the Land Dragon, Antharas, one of the six ancient Dragons. This lair is guarded by some of the most powerful creatures in Aden.");  
 $("#imgInfo").attr("src","https://s32.postimg.org/x41papm2d/loa.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Bloody Lady</td><td>60</td><td><img class=features src=" + de + " /> <img class=features src=" + x4 + " /&gt;</td><td>18722</td></tr><tr><td>Cave Beast</td><td>61</td><td><img class=features src=" + gi + " /> <img class=features src=" + x5 + " /></td><td>24786</td></tr><tr><td>Death Wave</td><td>62</td><td><img class=features src=" + ma + " /> <img class=features src=" + x5 + " /&gt;</td><td>24249</td></tr><tr><td>Maluk Soldier</td><td>63</td><td><img class=features src=" + un + " /> <img class=features src=" + x5 + " /&gt;</td><td>26076</td></tr><tr><td>Plando</td><td>64</td><td><img class=features src=" + hu + " /> <img class=features src=" + x5 + " /&gt;</td><td>26591</td></tr><tr><td>Banshee</td><td>65</td><td><img class=features src=" + de + " /> <img class=features src=" + x5 + " /&gt;</td><td>26541</td></tr><tr><td>Cave Howler</td><td>65</td><td><img class=features src=" + gi + " /> <img class=features src=" + x6 + " /&gt;</td><td>28655</td></tr><tr><td>Maluk Knight</td><td>66</td><td><img class=features src=" + un + " /> <img class=features src=" + x6 + " /&gt;</td><td>30715</td></tr><tr><td>Maluk Berserker</td><td>67</td><td><img class=features src=" + un + " /> <img class=features src=" + x6 + " /&gt;</td><td>32455</td></tr><tr><td>Maluk Lord</td><td>68</td><td><img class=features src=" + un + " /> <img class=features src=" + x7 + " /&gt;</td><td>33259</td></tr><tr><td>Pytan</td><td>68</td><td><img class=features src=" + de + " /> <img class=features src=" + x8 + " /&gt;</td><td>36832</td></tr><tr><td>Pytan Knight</td><td>68</td><td><img class=features src=" + un + " /> <img class=features src=" + x8 + " /&gt;</td><td>35967</td></tr><tr><td>Limal Karinness</td><td>69</td><td><img class=features src=" + de + " /> <img class=features src=" + x7 + " /&gt;</td><td>34342</td></tr><tr><td>Bloody Sniper</td><td>70</td><td><img class=features src=" + de + " /> <img class=features src=" + x5 + " /&gt;</td><td>31781</td></tr><tr><td>Karik</td><td>70</td><td><img class=features src=" + de + " /> <img class=features src=" + x7 + " /&gt;</td><td>36167</td></tr><tr><td>Knoriks</td><td>70</td><td><img class=features src=" + de + " /> <img class=features src=" + x12 + " /&gt;</td><td>691k</td></tr><tr><td>Maluk Banshee</td><td>70</td><td><img class=features src=" + un + " /> <img class=features src=" + x5 + " /&gt;</td><td>31528</td></tr></table>");  
  }
);

$("#ancientbg").hoverIntent(
  function() {
   $("#townName").html("Ancient Battleground");
   $("#territory").html("Aden Territory");
   $("#description").html("This is the battlefield where as legend says the bloodiest battle between Elmore and Aden took place. It is to the south of the Border Outpost.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/a/a7/Ancient_Battleground%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Starving Corpse</td><td>60</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /&gt;</td><td>10437</td></tr><tr><td>Ghostly Warrior</td><td>62</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /&gt;</td><td>12113</td></tr><tr><td>Bloody Ghost</td><td>64</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /&gt;</td><td>11580</td></tr><tr><td>Knight of the Past</td><td>64</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /&gt;</td><td>16795</td></tr><tr><td>Bloody Knight</td><td>65</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /&gt;</td><td>12401</td></tr><tr><td>Bloody Priest</td><td>66</td><td><img class=features src=" + de + " /> <img class=features src=" + x2 + " /&gt;</td><td>12477</td></tr><tr><td>Nihil Invader</td><td>66</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /&gt;</td><td>12315</td></tr><tr><td>Bloody Lord</td><td>68</td><td><img class=features src=" + de + " /> <img class=features src=" + x3 + " /&gt;</td><td>20125</td></tr><tr><td>Death Agent</td><td>68</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /&gt;</td><td>13572</td></tr><tr><td>Dark Guard</td><td>70</td><td><img class=features src=" + un + " /> <img class=features src=" + x3 + " /&gt;</td><td>20973</td></tr><tr><td>Rahha</td><td>65</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /&gt;</td><td>12.80kk</td></tr></table>");  
  }
);

$("#beehive").hoverIntent(
  function() {
   $("#townName").html("Beehive");
   $("#territory").html("Dion Territory");
   $("#description").html("Some time ago there was a cattle-range of Dion there, but swarms of angry bees started attacking the kettle, so the pasture has been abandoned. Since then, this area has been populated with various beasts.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/c/c6/Beehive%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Bloody Bee</td><td>23</td><td><img class=features src=" + bu + " /&gt;</td><td>1090</td></tr><tr><td>Monster Eye Destroyer</td><td>26</td><td><img class=features src=" + ma + " /&gt; </td><td>1301</td></tr><tr><td>Glass Jaguar</td><td>27</td><td><img class=features src=" + be + " /&gt; </td><td>1382</td></tr><tr><td>Delu Lizardman</td><td>28</td><td><img class=features src=" + hu + " /&gt; </td><td>1451</td></tr><tr><td>Vuku Priest Gharmash</td><td>33</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>1.47kk</td></tr></table>");  
  }
);

$("#cemetery").hoverIntent(
  function() {
   $("#townName").html("Cemetery");
   $("#territory").html("Aden Territory");
   $("#description").html("In the times of Elmoreden this place used to be the last home for kings. Now noblemen are buried here. The only king of Aden lies beneath this very ground. After the state perished, the cemetery degraded and the tombs have been raided regularly.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/7/7a/The_Cemetery%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Spiteful Ghost of Ruins</td><td>50</td><td><img class=features src=" + un + " /&gt;</td><td>5195</td></tr><tr><td>Tairim</td><td>50</td><td><img class=features src=" + ma + " /&gt; </td><td>4479</td></tr><tr><td>Soldier of Grief</td><td>51</td><td><img class=features src=" + un + " /&gt; </td><td>4697</td></tr><tr><td>Cruel Punisher</td><td>52</td><td><img class=features src=" + un + " /&gt; </td><td>4844</td></tr><tr><td>Taik Orc Watchman</td><td>52</td><td><img class=features src=" + hu + " /&gt; </td><td>4883</td></tr><tr><td>Roving Soul</td><td>53</td><td><img class=features src=" + un + " /&gt;</td><td>5056</td></tr><tr><td>Tortured Undead</td><td>53</td><td><img class=features src=" + un + " /&gt;</td><td>10129</td></tr><tr><td>Grave Guard</td><td>54</td><td><img class=features src=" + ma + " /&gt;</td><td>5224</td></tr><tr><td>Soul of Ruins</td><td>54</td><td><img class=features src=" + un + " /&gt;</td><td>5224</td></tr><tr><td>Taik Orc Supply Off.</td><td>55</td><td><img class=features src=" + hu + " /&gt;</td><td>5463</td></tr><tr><td>Ghost of Peasant Capt.</td><td>50</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /&gt;</td><td>7.73kk</td></tr><tr><td>Grave Robber Kim</td><td>52</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>8.49kk</td></tr><tr><td>Ghost Knight Kabed</td><td>55</td><td><img class=features src=" + un + " /> <img class=features src=" + ra + " /&gt;</td><td>8.13kk</td></tr></table>");  
  }
);

$("#blazingSwamp").hoverIntent(
  function() {
   $("#townName").html("Blazing Swamp");
   $("#territory").html("Aden Territory");
   $("#description").html("This is a pool of hot lava separating Aden and Elmore. This is where king Amadeo won his first victory in the war of Aden and Elmore, even though his enemies had an advantage over him.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/c/c4/Blazing_Swamp%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Judge of Marsh</td><td>65</td><td><img class=features src=" + pl + " /> <img class=features src=" + x2 + " /&gt;</td><td>9080</td></tr><tr><td>Tulben</td><td>66</td><td><img class=features src=" + an + " /> <img class=features src=" +x2 + " /&gt;</td><td>9335</td></tr><tr><td>Glow Wisp</td><td>67</td><td><img class=features src=" + ma + " /> <img class=features src=" + x2 + " /&gt;</td><td>19236</td></tr><tr><td>Hames Orc Scout</td><td>68</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>9910</td></tr><tr><td>Swamp Predator</td><td>69</td><td><img class=features src=" + bu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10203</td></tr><tr><td>Conjurer Bat</td><td>70</td><td><img class=features src=" + an + " /> <img class=features src=" + x2 + " /&gt;</td><td>12630</td></tr><tr><td>Conjurer Bat Lord</td><td>70</td><td><img class=features src=" + an + " /> <img class=features src=" + x2 + " /&gt;</td><td>12630</td></tr><tr><td>Cursed Guardian</td><td>70</td><td><img class=features src=" + un + " /> <img class=features src=" + x2 + " /&gt;</td><td>10501</td></tr><tr><td>Hames Orc Footman</td><td>70</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10501</td></tr><tr><td>Hames Orc Prefect</td><td>70</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10531</td></tr><tr><td>Hames Orc Shaman</td><td>70</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>20997</td></tr><tr><td>Hames Orc Sniper</td><td>70</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10501</td></tr><tr><td>Lava Wyrm</td><td>70</td><td><img class=features src=" + dr + " /> <img class=features src=" + x2 + " /&gt;</td><td>10501</td></tr></table>");  
  }
);

$("#dionHills").hoverIntent(
  function() {
   $("#townName").html("Dion Hills");
   $("#territory").html("Dion Territory");
   $("#description").html("There are many hills in this region located near Dion. Large quantity of crops also grow here. Even though it is close to a village, many dangerous monsters inhabit in this place keeping an eye on the village.");  
 $("#imgInfo").attr("src","https://s31.postimg.org/sobfcrfa3/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Dion Grizzly</td><td>20</td><td><img class=features src=" + an + " /&gt;</td><td>877</td></tr><tr><td>Enku Orc Shaman</td><td>20</td><td><img class=features src=" + hu + " /&gt;</td><td>877</td></tr><tr><td>Enku Orc Hero</td><td>21</td><td><img class=features src=" + hu + " /&gt;</td><td>941</td></tr><tr><td>Hobgoblin</td><td>21</td><td><img class=features src=" + hu + " /&gt;</td><td>945</td></tr><tr><td>Monster Eye Searcher</td><td>22</td><td><img class=features src=" + ma + " /> <img class=features src=" + x2 + " /&gt;</td><td>1893</td></tr><tr><td>Ol Mahum Ranger</td><td>22</td><td><img class=features src=" + hu + " /&gt;</td><td>1011</td></tr><tr><td>Tumran Bugbear</td><td>23</td><td><img class=features src=" + gi + " /&gt;</td><td>1082</td></tr><tr><td>Dire Wolf</td><td>24</td><td><img class=features src=" + an + " /&gt;</td><td>1161</td></tr><tr><td>Monster Eye Overseer</td><td>25</td><td><img class=features src=" + ma + " /&gt;</td><td>1222</td></tr></table>");  
  }
);

$("#enchantedValley").hoverIntent(
  function() {
   $("#townName").html("Enchanted Valley");
   $("#territory").html("Oren Territory");
   $("#description").html("Changes in the Material Realm has influenced even the Enchanted Valley. Oddly enough, all fairies has just disappeared from there! Only Mimyu, who was one of the first fairies who came to the Valley in search for a new home, remained.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/3/35/The_Enchanted_Valley%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Fline</td><td>50</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /&gt;</td><td>6675</td></tr><tr><td>Liele</td><td>51</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /&gt;</td><td>6944</td></tr><tr><td>Valley Treant</td><td>52</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /&gt;</td><td>7839</td></tr><tr><td>Satyr</td><td>53</td><td><img class=features src=" + fa + " /> <img class=features src=" + x3 + " /&gt;</td><td>10897</td></tr><tr><td>Unicorn</td><td>54</td><td><img class=features src=" + sp + " /> <img class=features src=" + x3 + " /&gt;</td><td>11312</td></tr><tr><td>Forest Runner</td><td>55</td><td><img class=features src=" + pl + " /> <img class=features src=" + x2 + " /&gt;</td><td>8076</td></tr><tr><td>Fline Elder</td><td>56</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /&gt;</td><td>8418</td></tr><tr><td>Liele Elder</td><td>57</td><td><img class=features src=" + sp + " /> <img class=features src=" + x2 + " /&gt;</td><td>8721</td></tr><tr><td>Valley Treant Elder</td><td>58</td><td><img class=features src=" + sp + " /> <img class=features src=" + x3 + " /&gt;</td><td>14015</td></tr><tr><td>Satyr Elder</td><td>59</td><td><img class=features src=" + fa + " /> <img class=features src=" + x3 + " /&gt;</td><td>13555</td></tr><tr><td>Elder the Unicorn</td><td>60</td><td><img class=features src=" + sp + " /> <img class=features src=" + x3 + " /&gt;</td><td>14018</td></tr><tr><td>Messenger Berun</td><td>50</td><td><img class=features src=" + fa + " /> <img class=features src=" + ra + " /&gt;</td><td>7.73kk</td></tr><tr><td>Paniel the Unicorn</td><td>54</td><td><img class=features src=" + sp + " /> <img class=features src=" + ra + " /&gt;</td><td>8.42kk</td></tr><tr><td>Lookout Ruell</td><td>55</td><td><img class=features src=" + sp + " /> <img class=features src=" + ra + " /&gt;</td><td>8.13kk</td></tr><tr><td>Furious Thieles</td><td>55</td><td><img class=features src=" + sp + " /> <img class=features src=" + ra + " /&gt;</td><td>8.13kk</td></tr><tr><td>Fairy Queen Timiniel</td><td>61</td><td><img class=features src=" + fa + " /> <img class=features src=" + ra + " /&gt;</td><td>9.27kk</td></tr></table>");  
  }
);

$("#evilhg").hoverIntent(
  function() {
   $("#townName").html("Evil Hunting Grounds");
   $("#territory").html("Gludio Territory");
   $("#description").html("This road heads to Neutral Zone from Gludio Town. Along the road, werewolves and all kinds of other dangerous monsters attack travelers, which makes it unpopular for merchants and common peasants.");  
 $("#imgInfo").attr("src","https://s32.postimg.org/pu1thnx7p/ehg.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Vuku Orc</td><td>14</td><td><img class=features src=" + hu + " /&gt;</td><td>617</td></tr><tr><td>Shadow Beast</td><td>15</td><td><img class=features src=" + be + " /&gt;</td><td>663</td></tr><tr><td>Vuku Orc Archer</td><td>15</td><td><img class=features src=" + hu + " /&gt;</td><td>661</td></tr><tr><td>Pincher</td><td>16</td><td><img class=features src=" + bu + " /&gt;</td><td>708</td></tr><tr><td>Ratman Spy</td><td>16</td><td><img class=features src=" + hu + " /&gt; </td><td>708</td></tr><tr><td>Bugbear Raider</td><td>17</td><td><img class=features src=" + gi + " /&gt; </td><td>752</td></tr><tr><td>Pinrul</td><td>17</td><td><img class=features src=" + bu + " /&gt;</td><td>752</td></tr><tr><td>Ratman Hunter</td><td>18</td><td><img class=features src=" + hu + " /&gt; </td><td>788</td></tr><tr><td>Ratman Chieftain</td><td>19</td><td><img class=features src=" + hu + " /&gt; </td><td>842</td></tr><tr><td>Ratman Chief</td><td>20</td><td><img class=features src=" + hu + " /&gt;</td><td>877</td></tr><tr><td>Sukar Ratman Chief</td><td>21</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>290k</td></tr></table>");  
  }
);

$("#fellmerehg").hoverIntent(
  function() {
   $("#townName").html("Fellmere Hunting Grounds");
   $("#territory").html("Gludio Territory");
   $("#description").html("A long stretch of land west of Fellmere Lake. Laden with volcanic rock, this place is inhabited by spiders, bees, and Lizardmen. The nergy of Spirits is still strong around the lake, and besides there are banks of granite on the shores.");  
 $("#imgInfo").attr("src","https://s32.postimg.org/7mxmr7ej9/fhg.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Felim Lizardman</td><td>14</td><td><img class=features src=" + hu + " /&gt;</td><td>614</td></tr><tr><td>Red Bear</td><td>14</td><td><img class=features src=" + an + " /&gt;</td><td>619</td></tr><tr><td>Felim Lizardman Scout</td><td>15</td><td><img class=features src=" + hu + " /&gt;</td><td>663</td></tr><tr><td>Gora Werewolf</td><td>16</td><td><img class=features src=" + hu + " /&gt;</td><td>708</td></tr><tr><td>Bear</td><td>17</td><td><img class=features src=" + an + " /&gt; </td><td>746</td></tr><tr><td>Felim Lizardman Warr.</td><td>17</td><td><img class=features src=" + hu + " /&gt; </td><td>752</td></tr><tr><td>Giant Venomous Spider</td><td>18</td><td><img class=features src=" + bu + " /&gt;</td><td>794</td></tr><tr><td>Ratman Hunter</td><td>18</td><td><img class=features src=" + hu + " /&gt; </td><td>788</td></tr><tr><td>Arachnid Tracker</td><td>19</td><td><img class=features src=" + bu + " /&gt; </td><td>835</td></tr><tr><td>Poisonous Thornleg</td><td>20</td><td><img class=features src=" + bu + " /&gt;</td><td>884</td></tr><tr><td>Giant Poison Bee</td><td>21</td><td><img class=features src=" + bu + " /&gt; </td><td>945</td></tr><tr><td>Cloudy Beast</td><td>22</td><td><img class=features src=" + be + " /&gt;</td><td>1016</td></tr><tr><td>Young Araneid</td><td>23</td><td><img class=features src=" + bu + " /&gt;</td><td>1087</td></tr><tr><td>Plain Grizzly</td><td>24</td><td><img class=features src=" + an + " /&gt;</td><td>1157</td></tr><tr><td>Cloudy Beast Turen</td><td>25</td><td><img class=features src=" + an + " /&gt;</td><td>1228</td></tr></table>");  
  }
);

$("#fieldsOfMassacre").hoverIntent(
  function() {
   $("#townName").html("Fields of Massacre");
   $("#territory").html("Aden Territory");
   $("#description").html("This is the battlefield at the Devastated Castle. When people of Elmore attempted to besiege the castle, they used a strong poison. That is why the hordes of the Myo Race are all around.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/9/98/Fields_of_Massacre%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Archer of Destruction</td><td>55</td><td><img class=features src=" + un + " /&gt;</td><td>5463</td></tr><tr><td>Doom Scout</td><td>56</td><td><img class=features src=" + un + " /&gt;</td><td>5663</td></tr><tr><td>Graveyard Lich</td><td>57</td><td><img class=features src=" + ma + " /&gt;</td><td>11669</td></tr><tr><td>Dismal Pole</td><td>58</td><td><img class=features src=" + pl + " /&gt;</td><td>6026</td></tr><tr><td>Graveyard Predator</td><td>59</td><td><img class=features src=" + bu + " /&gt; </td><td>6286</td></tr><tr><td>Doom Servant</td><td>60</td><td><img class=features src=" + un + " /&gt; </td><td>6501</td></tr><tr><td>Doom Guard</td><td>61</td><td><img class=features src=" + un + " /&gt;</td><td>6720</td></tr><tr><td>Doom Archer</td><td>62</td><td><img class=features src=" + un + " /&gt; </td><td>6942</td></tr><tr><td>Spiteful Soul Warrior</td><td>62</td><td><img class=features src=" + un + " /&gt; </td><td>8349</td></tr><tr><td>Doom Trooper</td><td>63</td><td><img class=features src=" + un + " /&gt;</td><td>7168</td></tr><tr><td>Spiteful Soul Wizard</td><td>63</td><td><img class=features src=" + un + " /&gt; </td><td>8620</td></tr><tr><td>Doom Warrior</td><td>64</td><td><img class=features src=" + un + " /&gt;</td><td>7397</td></tr><tr><td>Doom Knight</td><td>65</td><td><img class=features src=" + un + " /&gt;</td><td>15235</td></tr><tr><td>Spiteful Soul Leader</td><td>65</td><td><img class=features src=" + un + " /&gt;</td><td>9176</td></tr><tr><td>Ghost Lidia</td><td>60</td><td><img class=features src=" + de + " /> <img class=features src=" + ra + " /&gt;</td><td>8.51kk</td></tr></table>");  
  }
);

$("#forestOfEvil").hoverIntent(
  function() {
   $("#townName").html("Forest of Evil");
   $("#territory").html("Oren Territory");
   $("#description").html("The forest near Ivory Tower Crater. This area is very dangerous because of strengthened monsters from Nebulite's power. It is rumoured that an ancient king lurks around this forest.");  
 $("#imgInfo").attr("src","https://s31.postimg.org/vm8e6sfbf/foev.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Formor</td><td>45</td><td><img class=features src=" + gi + " /&gt;</td><td>3645</td></tr><tr><td>Formor Elder</td><td>46</td><td><img class=features src=" + gi + " /&gt;</td><td>3808</td></tr><tr><td>Tarlk Bugbear</td><td>47</td><td><img class=features src=" + gi + " /&gt;</td><td>3976</td></tr><tr><td>Tarlk Bugbear Warr.</td><td>48</td><td><img class=features src=" + gi + " /&gt;</td><td>4147</td></tr><tr><td>Tarlk Bugbear Capt.</td><td>49</td><td><img class=features src=" + gi + " /&gt; </td><td>4336</td></tr><tr><td>King Tarlk</td><td>48</td><td><img class=features src=" + gi + " /> <img class=features src=" + ra + " /&gt;</td><td>6.58kk</td></tr><tr><td>Ketra's Comm. Atis</td><td>49</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>7.15kk</td></tr></table>");  
  }
);

$("#forestOfMirrors").hoverIntent(
  function() {
   $("#townName").html("Forest of Mirrors");
   $("#territory").html("Aden Territory");
   $("#description").html("They say, in the deep of the woods, where the Sun doesn't shine, there lives the Forest of Mirrors Ghost, one of the Shilen monsters. It banishes the memory of everyone who comes across his way.");  
 $("#imgInfo").attr("src","http://www.linedia.ru/w/images/5/5e/The_Forest_of_Mirrors%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Taik Orc</td><td>45</td><td><img class=features src=" + hu + " /&gt;</td><td>3645</td></tr><tr><td>Forest of Mirr. Ghost</td><td>46</td><td><img class=features src=" + un + " /&gt;</td><td>3821</td></tr><tr><td>Taik Orc Archer</td><td>46</td><td><img class=features src=" + hu + " /&gt;</td><td>7582</td></tr><tr><td>Carinkain</td><td>47</td><td><img class=features src=" + ma + " /&gt;</td><td>3989</td></tr><tr><td>Forest of Mirr. Ghost</td><td>47</td><td><img class=features src=" + un + " /&gt; </td><td>3989</td></tr><tr><td>Taik Orc Warrior</td><td>47</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>7408</td></tr><tr><td>Forest of Mirr. Ghost</td><td>48</td><td><img class=features src=" + un + " /&gt; </td><td>4161</td></tr><tr><td>Taik Orc Shaman</td><td>48</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>15408</td></tr><tr><td>Mirror</td><td>49</td><td><img class=features src=" + fa + " /> <img class=features src=" + x2 + " /&gt;</td><td>6410</td></tr><tr><td>Taik Orc Captain</td><td>49</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>8018</td></tr><tr><td>Harit Lizardman</td><td>50</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>8316</td></tr><tr><td>Harit Liz. Soldier</td><td>51</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>8651</td></tr><tr><td>Harit Liz. Archer</td><td>52</td><td><img class=features src=" + hu + " /&gt;</td><td>8735</td></tr><tr><td>Harit Liz. Warrior</td><td>53</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>9674</td></tr><tr><td>Harit Liz. Shaman</td><td>54</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>19543</td></tr><tr><td>Harit Liz. Matriarch</td><td>55</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10320</td></tr><tr><td>Mirror of Oblivion</td><td>49</td><td><img class=features src=" + fa + " /> <img class=features src=" + ra + " /&gt;</td><td>7.15kk</td></tr><tr><td>Wizard Isirr</td><td>55</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>8.13kk</td></tr><tr><td>Guardian Garangky</td><td>56</td><td><img class=features src=" + be + " /> <img class=features src=" + ra + " /&gt;</td><td>8.40kk</td></tr></table>");  
  }
);

$("#huntersValley").hoverIntent(
  function() {
   $("#townName").html("Hunters Valley");
   $("#territory").html("Oren Territory");
   $("#description").html("This valley is located in the south of Hunters Village. The hunters are mainly active in this place. There are many powerful and large monsters, such as drakes and giants.");      $("#imgInfo").attr("src","https://s31.postimg.org/nfc4z96bf/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Karul Bugbear</td><td>40</td><td><img class=features src=" + gi + " /&gt;</td><td>2889</td></tr><tr><td>Tamlin Orc</td><td>41</td><td><img class=features src=" + hu + " /&gt;</td><td>3025</td></tr><tr><td>Tamlin Orc Archer</td><td>42</td><td><img class=features src=" + hu + " /&gt;</td><td>3175</td></tr><tr><td>Kronbe Spider</td><td>43</td><td><img class=features src=" + bu + " /&gt;</td><td>3312</td></tr><tr><td>Lakin</td><td>44</td><td><img class=features src=" + gi + " /&gt; </td><td>3469</td></tr><tr><td>Weird Drake</td><td>45</td><td><img class=features src=" + dr + " /&gt;</td><td>3645</td></tr><tr><td>Thief Kelbar</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>4.59kk</td></tr><tr><td>Evil Spirit Cyrion</td><td>45</td><td><img class=features src=" + dr + " /> <img class=features src=" + ra + " /&gt;</td><td>5.05kk</td></tr></table>");  
  }
);

$("#lizdwellings").hoverIntent(
  function() {
   $("#townName").html("Langk Lizardmen Dwellings");
   $("#territory").html("Gludio Territory");
   $("#description").html("Rich sea products are available since it is next to the ocean. Langk Lizardmen who like stealing settled in this place since it is adjacent to the road of Gludio.");      $("#imgInfo").attr("src","https://s32.postimg.org/rdgtz0hj9/lld.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Langk Liz. Scout</td><td>16</td><td><img class=features src=" + hu + " /&gt;</td><td>708</td></tr><tr><td>Langk Liz. Warrior</td><td>17</td><td><img class=features src=" + hu + " /&gt;</td><td>752</td></tr><tr><td>Langk Liz. Sentinel</td><td>19</td><td><img class=features src=" + hu + " /&gt;</td><td>839</td></tr><tr><td>Monster Eye Watchman</td><td>21</td><td><img class=features src=" + ma + " /&gt;</td><td>941</td></tr><tr><td>Langk Liz. Lieutenant</td><td>22</td><td><img class=features src=" + hu + " /&gt; </td><td>1011</td></tr><tr><td>Monster Eye Patrol</td><td>22</td><td><img class=features src=" + ma + " /&gt;</td><td>1019</td></tr><tr><td>Ol Mahum Deserter</td><td>23</td><td><img class=features src=" + hu + " /&gt;</td><td>1087</td></tr><tr><td>Langk Liz. Shaman</td><td>24</td><td><img class=features src=" + hu + " /&gt;</td><td>1157</td></tr><tr><td>Langk Liz. Leader</td><td>25</td><td><img class=features src=" + hu + " /&gt;</td><td>1222</td></tr><tr><td>Langk Matr. Rashkos</td><td>24</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " / &gt;</td><td>436k</td></tr></table>");  
  }
);

$("#outlawForest").hoverIntent(
  function() {
   $("#townName").html("Outlaw Forest");
   $("#territory").html("Oren Territory");
   $("#description").html("The forest near Bandit Stronghold. The Bandit's monsters declared this area as their territory. This forest is very treacherous for unprotected commoners, as well as seasoned adventurers.");      $("#imgInfo").attr("src","https://s32.postimg.org/p5gkrbmx1/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Tarlk Basilisk</td><td>50</td><td><img class=features src=" + be + " /&gt;</td><td>4479</td></tr><tr><td>Elder Tarlk Basiliks</td><td>51</td><td><img class=features src=" + be + " /&gt;</td><td>4697</td></tr><tr><td>Oel Mahum</td><td>53</td><td><img class=features src=" + hu + " /&gt;</td><td>5056</td></tr><tr><td>Oel Mahum Warrior</td><td>54</td><td><img class=features src=" + hu + " /&gt;</td><td>5266</td></tr><tr><td>Oel Mahum Shaman</td><td>55</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>10102</td></tr><tr><td>Slaughter Lord Gato</td><td>50</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>7.73kk</td></tr><tr><td>Refugee Applicant Leo</td><td>56</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>8.40kk</td></tr></table>");  
  }
);

$("#plainsLiz").hoverIntent(
  function() {
   $("#townName").html("Plains of the Lizardmen");
   $("#territory").html("Oren Territory");
   $("#description").html("It was originally called 'Great Plains of Oren'. However, the humans who were jealous of the Leto Lizardman race living in this perfect climate area put the name 'Plains of the Lizardmen' with a hue of contempt and disdain.");      $("#imgInfo").attr("src","http://ola2.info/w/images/thumb/0/00/plains_of_the_lizardmen_252c_screenshot.jpg/333px-plains_of_the_lizardmen_252c_screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Bloody Axe's Escort</td><td>35</td><td><img class=features src=" + hu + " /&gt;</td><td>2194</td></tr><tr><td>Leto Lizardman</td><td>35</td><td><img class=features src=" + hu + " /&gt;</td><td>2295</td></tr><tr><td>Leto Liz. Archer</td><td>36</td><td><img class=features src=" + hu + " /&gt;</td><td>2321</td></tr><tr><td>Leto Liz. Soldier</td><td>37</td><td><img class=features src=" + hu + " /&gt;</td><td>2464</td></tr><tr><td>Leto Liz. Warrior</td><td>38</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>4843</td></tr><tr><td>Warrior of the Plains</td><td>38</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>4049</td></tr><tr><td>Leto Liz. Shaman</td><td>39</td><td><img class=features src=" + hu + " /&gt; </td><td>2746</td></tr><tr><td>Wizard of the Plains</td><td>39</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>4243</td></tr><tr><td>Leto Liz. Overlord</td><td>40</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5343</td></tr><tr><td>Lord of the Plains</td><td>40</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>4464</td></tr><tr><td>Leto Chief Talkin</td><td>40</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>3.45kk</td></tr><tr><td>Wizard of Storm Teruk</td><td>40</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>3.45kk</td></tr></table>");  
  }
);

$("#sealOfShilen").hoverIntent(
  function() {
   $("#townName").html("Seal of Shilen");
   $("#territory").html("Aden Territory");
   $("#description").html("According to the legend, with these Gates the first Emperor Shunaiman's barred the way to the place where Shilen came down and became the goddess of death and created horrible monsters.");      $("#imgInfo").attr("src","https://s32.postimg.org/4cyhpauud/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Crimson Drake</td><td>61</td><td><img class=features src=" + dr + " /&gt;</td><td>6720</td></tr><tr><td>Kadios</td><td>62</td><td><img class=features src=" + bu + " /&gt;</td><td>6942</td></tr><tr><td>Trives</td><td>63</td><td><img class=features src=" + be + " /&gt;</td><td>7110</td></tr><tr><td>Palibati</td><td>64</td><td><img class=features src=" + be + " /&gt;</td><td>7338</td></tr></table>");  
  }
);

$("#timakOutpost").hoverIntent(
  function() {
   $("#townName").html("Timak Outpost");
   $("#territory").html("Oren Territory");
   $("#description").html("The base of Timak Orcs near the territory of Elves. But there is a confliction with Elves which are not eager to share their lofty mountains with Orcs.");      $("#imgInfo").attr("src","https://s32.postimg.org/679o6nsgl/timak.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Timak Orc</td><td>40</td><td><img class=features src=" + hu + " /&gt;</td><td>2889</td></tr><tr><td>Timak Orc Archer</td><td>41</td><td><img class=features src=" + hu + " /&gt;</td><td>3011</td></tr><tr><td>Timak Orc Soldier</td><td>42</td><td><img class=features src=" + hu + " /&gt;</td><td>3175</td></tr><tr><td>Timak Orc Troop Warr.</td><td>43</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5185</td></tr><tr><td>Timak Orc Warrior</td><td>43</td><td><img class=features src=" + hu + " /&gt;</td><td>3328</td></tr><tr><td>Timak Orc Shaman</td><td>44</td><td><img class=features src=" + hu + " /&gt;</td><td>3496</td></tr><tr><td>Timak Orc Troop Sh.</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5429</td></tr><tr><td>Timak Orc Prefect</td><td>45</td><td><img class=features src=" + hu + " /&gt;</td><td>3657</td></tr><tr><td>Timak Orc Troop Capt.</td><td>45</td><td><img class=features src=" + hu + " /> <img class=features src=" + x2 + " /&gt;</td><td>5678</td></tr><tr><td>Shaman King Selu</td><td>40</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>3.45kk</td></tr><tr><td>Timak Ranger Capt.</td><td>44</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>4.59kk</td></tr><tr><td>Timak Orc Gosmos</td><td>45</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>5.05kk</td></tr><tr><td>Timak Priest Ragoth</td><td>57</td><td><img class=features src=" + hu + " /> <img class=features src=" + ra + " /&gt;</td><td>8.59kk</td></tr></table>");  
  }
);

$("#sotmt").hoverIntent(
  function() {
   $("#townName").html("Shadow of the Mother Tree");
   $("#territory").html("Oren Territory");
   $("#description").html("Among the sections in Elven Forest, the place where Mother Tree's influence is the strongest is called Shadow of the Mother Tree. Mother Tree is the tree from the very beginning of the world and is the center of the Elven society.");      $("#imgInfo").attr("src","https://s32.postimg.org/qqioiicyt/sotmt.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Young Red Keltir</td><td>1</td><td><img class=features src=" + an + " /&gt;</td><td>44</td></tr><tr><td>Red Keltir</td><td>2</td><td><img class=features src=" + an + " /&gt;</td><td>88</td></tr><tr><td>Elder Keltir</td><td>3</td><td><img class=features src=" + an + " /&gt;</td><td>132</td></tr><tr><td>Gray Wolf</td><td>4</td><td><img class=features src=" + an + " /&gt;</td><td>176</td></tr><tr><td>Goblin Raider</td><td>5</td><td><img class=features src=" + hu + " /&gt;</td><td>220</td></tr><tr><td>Kaboo Orc</td><td>6</td><td><img class=features src=" + hu + " /&gt;</td><td>264</td></tr><tr><td>Kaboo Orc Soldier</td><td>7</td><td><img class=features src=" + hu + " /&gt; </td><td>308</td></tr></table>");  
  }
);

$("#shilenTemple").hoverIntent(
  function() {
   $("#townName").html("Shilen Temple");
   $("#territory").html("Oren Territory");
   $("#description").html("A temple where they worship Shilen who is considered to be unholy by other races. The source of spiritual power of Dark Elves. The Dark Elves chief Mitraell who was sealed by the humans in the past, is acting as the anchor of the race.");      $("#imgInfo").attr("src","http://www.linedia.ru/w/images/0/0d/The_Shilen_Temple%2C_Screenshot.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Young Brown Keltir</td><td>1</td><td><img class=features src=" + an + " /&gt;</td><td>44</td></tr><tr><td>Brown Keltir</td><td>2</td><td><img class=features src=" + an + " /&gt;</td><td>88</td></tr><tr><td>Elder Brown Keltir</td><td>3</td><td><img class=features src=" + an + " /&gt;</td><td>132</td></tr><tr><td>Ashen Wolf</td><td>4</td><td><img class=features src=" + an + " /&gt;</td><td>176</td></tr><tr><td>Goblin</td><td>5</td><td><img class=features src=" + hu + " /&gt;</td><td>220</td></tr><tr><td>Imp</td><td>6</td><td><img class=features src=" + fa + " /&gt;</td><td>264</td></tr><tr><td>Imp Elder</td><td>7</td><td><img class=features src=" + fa + " /&gt; </td><td>308</td></tr></table>");  
  }
);

$("#windmillHill").hoverIntent(
  function() {
   $("#townName").html("Windmill Hill");
   $("#territory").html("Gludio Territory");
   $("#description").html("This hill houses windmills that process crops using the wind from the sea. It is located in the south of Gludin Village. It used to process the crops from Gludin before, but these days, crops are transported from Dion to be processed here.");      $("#imgInfo").attr("src","https://s32.postimg.org/uny3fffqt/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Langk Lizardman</td><td>15</td><td><img class=features src=" + hu + " /&gt;</td><td>661</td></tr><tr><td>Brown Bear</td><td>16</td><td><img class=features src=" + an + " /&gt;</td><td>703</td></tr><tr><td>Vuku Orc Warrior</td><td>17</td><td><img class=features src=" + hu + " /&gt;</td><td>752</td></tr><tr><td>Giant Venomous Spider</td><td>18</td><td><img class=features src=" + bu + " /&gt;</td><td>794</td></tr><tr><td>Arachnid Tracker</td><td>19</td><td><img class=features src=" + bu + " /&gt;</td><td>835</td></tr><tr><td>Poisonous Thornleg</td><td>20</td><td><img class=features src=" + bu + " /&gt;</td><td>884</td></tr></table>");  
  }
);

$("#obeliskOfVictory").hoverIntent(
  function() {
   $("#townName").html("Obelisk of Victory Hill");
   $("#territory").html("Gludio Territory");
   $("#description").html("This towering stone monument stands in the center of Talking Island, not far from the ruins that were once the Elven Magic School. It was constructed 5 centuries before the Human Empire was formed.");      $("#imgInfo").attr("src","http://vignette1.wikia.nocookie.net/echoesofdarkness/images/4/4f/Obelisk_of_Victory.jpg/revision/latest?cb=20100212214707"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Orc Soldier</td><td>7</td><td><img class=features src=" + hu + " /&gt;</td><td>308</td></tr><tr><td>Goblin Scout</td><td>8</td><td><img class=features src=" + hu + " /&gt;</td><td>352</td></tr><tr><td>Orc Archer</td><td>8</td><td><img class=features src=" + hu + " /&gt;</td><td>352</td></tr><tr><td>Werewolf</td><td>9</td><td><img class=features src=" + hu + " /&gt;</td><td>397</td></tr><tr><td>Orc Warrior</td><td>10</td><td><img class=features src=" + hu + " /&gt;</td><td>441</td></tr><tr><td>Werewolf Hunter</td><td>10</td><td><img class=features src=" + hu + " /&gt;</td><td>442</td></tr><tr><td>Orc Lieutenant</td><td>11</td><td><img class=features src=" + hu + " /&gt;</td><td>482</td></tr><tr><td>Orc Captain</td><td>12</td><td><img class=features src=" + hu + " /&gt;</td><td>530</td></tr><tr><td>Werewolf Chieftain</td><td>12</td><td><img class=features src=" + hu + " /&gt;</td><td>530</td></tr><tr><td>Stone Golem</td><td>13</td><td><img class=features src=" + ma + " /&gt;</td><td>653</td></tr><tr><td>Crasher</td><td>14</td><td><img class=features src=" + ma + " /&gt;</td><td>693</td></tr><tr><td>Giant Spider</td><td>15</td><td><img class=features src=" + bu + " /&gt;</td><td>663</td></tr><tr><td>Giant Fang Spider</td><td>16</td><td><img class=features src=" + bu + " /&gt;</td><td>708</td></tr><tr><td>Giant Blade Spider</td><td>17</td><td><img class=features src=" + bu + " /&gt;</td><td>752</td></tr></table>");  
  }
);

$("#windyHill").hoverIntent(
  function() {
   $("#townName").html("Windy Hill");
   $("#territory").html("Gludio Territory");
   $("#description").html("A gathering place for the Wind Spirits that had lost their sanity during Beleth's sealing, this place is known for a vortex created by the collision of the marine winds against the mountainous terrain.");      $("#imgInfo").attr("src","https://s31.postimg.org/lpuybambv/image.jpg"); 
  $("#quests").html("Monsters");  
  $("#npcList").html("<table><tr><th>Name</th><th>Level</th><th>Features</th><th>Exp</th></tr><tr><td>Sobbing Wind</td><td>26</td><td><img class=features src=" + sp + " /&gt;</td><td>1301</td></tr><tr><td>Babbling Wind</td><td>27</td><td><img class=features src=" + sp + " /&gt;</td><td>1371</td></tr><tr><td>Giggling Wind</td><td>28</td><td><img class=features src=" + hu + " /&gt;</td><td>1451</td></tr><tr><td>Singing Wind</td><td>29</td><td><img class=features src=" + hu + " /&gt;</td><td>1531</td></tr><tr><td>Whispering Wind</td><td>30</td><td><img class=features src=" + sp + " /&gt;</td><td>1612</td></tr></table>");  
  }
);

