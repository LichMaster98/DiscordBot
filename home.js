const prefix = '!';
const absPath = "./Documents/DiscordBot2/hroa/";

// Import the discord.js module
const Discord = require('discord.js');
const fs = require('fs');

// Create an instance of a Discord client
const client = new Discord.Client();

//Global Variables

var voteActive = false;
const admins = ['LichMaster98', 'Nighteyes', 'Bask Aurix'];
const asChannels = ['minor-council', 'the-think-tank', 'combat-scenario-modelling', 'text-to-voice','document-links','secretary-station','records-keeper','official-diplo-cord'];
const descCommands = ['new','append','modify','delete','list','help'];
var currentVote = {yes:0, no:0, abstain:0, topic:""};

//Usefull Fucntions for the Code?

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function confirmWrite(author,location, channel) {
  channel.send(author + " I've finished writing the description of " + location);
  console.log("Writing of location " + location + " for " + author.username + " is complete.");
}

function onList(location) { //if true return true otherwise false
//MUST FIGURE OUT HOW TO DO THIS PART?

}

function addList(location) {

}

function displayList(location) {

}


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  //Find the actual command passed to the bot -- Allows for inputs!
  content = message.content;
  if(content.substring(0,1) != prefix) {
    return;
  }
  var space = content.search(" ");
  if (space != -1) {
    var command = content.substring(0,space).toLowerCase();
    var remaining = content.substring(space+1,content.length);
  } else {
    command = content;
  }

  if (command === prefix + 'help') {
    //To do
  }

  //Voting Code

  if(message.guild.name === 'Astral Synedrium OOC Chat') {

/*  if(command === prefix + 'vote') {
    if(message.channel.type === 'text') {
      var i;
      var isAdmin = false;
      for (i = 0; i < admins.length; i++) {
        if(admins[i] === message.author.username) {
          isAdmin = true;
        }
      }
      if(isAdmin) {
        if(message.channel.name === 'notices') {
          message.channel.send('Beep Boop. I am now accpeting votes on: ' + remaining);
          voteActive = true
        }
      } else if (voteActive) {
        if(message.channel.name === 'minor-council') {

        } else if (message.channel.name === 'diplomatic-coordination') {

        }
      }
    } else if (message.channel.type === 'dm') {

    }
  }

  if (command === prefix + 'end'){
    var i;
    var isAdmin = false;
    for (i = 0; i < admins.length; i++) {
      if(admins[i] === message.author.username) {
        isAdmin = true;
      }
    }
    //TO FILL IN REST OF CODE
  } */

  if (command == prefix + 'vote') {
    var i;
    var isAdmin = false;
    for (i = 0; i < admins.length; i++) {
      if(admins[i] === message.author.username) {
        isAdmin = true;
      }
    }
    if(isAdmin) {
      if(message.channel.name === 'notices') {
        var emojis = message.guild.emojis;
        var minor = emojis.find('name','Minor')

        message.react("👍");
        message.react("👎");
        message.react(minor);

      }
    }
  }

  //Relevant Astral Synedrium commands
  if(command === prefix + 'tracker') {
    message.channel.send("The Faction Turn Tracker: <https://docs.google.com/spreadsheets/d/1QR078QvO5Q8S9gbQDglRhYK1HV3tBd0111SmjoVV0jQ/edit>");
  }

  if(command === prefix + 'rulings') {
    message.channel.send("Spacemaster Adam's rulings can be found here: <https://docs.google.com/document/d/1I34PlRnkl5Pzq9av9xWGXwY2Tzp7f5O9LQdlj0O0drc/edit>");
  }

  if(command === prefix + 'as' || command === prefix + 'ass') {
    message.channel.send("The August and Beneficent Synedrium Astral of the Beloved Lords Temporal and Eternal of the Sacred High Houses Imperial, Servants of the Most Serene Celestial Emperox (Long May They Reign), Shepherds of the Acheron Rho Sector, and Guardians of the Righteous");
  }

  if (command === prefix + 'procedures') {
    message.channel.send("The entire procedures can be found here: <https://docs.google.com/document/d/1QXSiIF7c2a5ngaaIr060BzNqxIBL68CRHGkftwMBi9I/edit?usp=sharing>");
  }

  if (command === prefix + 'docs') {
    var i;
    var isAdmin = false;
    for (i = 0; i < asChannels.length; i++) {
      if(asChannels[i] === message.channel.name) {
        isAdmin = true;
        break;
      }
    }
    message.channel.send("The Results & Documents records for the AS can be found here: <https://docs.google.com/spreadsheets/d/1DSuOtC1ExXChGfpWr7Nmxmfm0GIDKhENfOjQFWBSZXs/edit#gid=1912365343>");
  }

  if (command === prefix + 'videos') {
    var i;
    var isAdmin = false;
    for (i = 0; i < asChannels.length; i++) {
      if(asChannels[i] === message.channel.name) {
        isAdmin = true;
        break;
      }
    }
    if(isAdmin) {
      message.channel.send("The private video playlist of the Astral Synedrium can be found here: <https://www.youtube.com/playlist?list=PLGQ8E3xwqU2vfU-JrioWMvkeLM1TiKgUc>");
    }
  }

    //Relevant House Commands
    if (command === prefix + 'house') {
      if(remaining === 'aquila') {
        message.channel.send("Are you doing your part?");
      } else if (remaining === 'eridanus') {
        message.channel.send("Stop that, abusing the bot commands is taxable.");
      } else if (remaining === 'lyra') {
        if(Math.floor(Math.random() * 2) == 1) {
          message.channel.send("It's FIIIIIIIINE.");
        } else {
          message.channel.send("GLITTER BOMB!");
        }
      } else if (remaining === 'pyxis') {
        message.channel.send("Jumping the Lodestone into the Guild Dyson Sphere in 3... 2... 1...");
      } else if (remaining === 'reticulum') {
        message.channel.send("Juggling the axes are you...?")
      } else if (remaining === 'serpens') {
        message.channel.send("It's the snek ball... what more is there to say?");
      } else if (remaining === 'triangulum') {
        message.channel.send("*Floating on the ceiling* 'Where's my research gone?");
      } else {
        message.channel.send("The Houses Minor is made of Seven houses. House Aquila, House Eridanus, House Lyra, House Pyxis, House Retiuclum, House Serpens, House Triangulum");
      }
    }
  }


  //Valid Commands
  if (command === prefix + 'valid') {
    if (remaining === null) { return;
    } else {
      message.channel.send(remaining + ' is valid. :Approved: ');
    }
  }

  if(command === prefix + 'joke') {
    message.channel.send("Programmer's joke: <https://www.destroyallsoftware.com/talks/wat>");
  }

  //User Commands
  if(command === prefix + 'bask'){
    if(message.author.username === 'Bask Aurix') {
      message.channel.send( message.author + ' you are a cutie! <3');
    } else {
      message.channel.send( 'Vael is a cutie!');
    }
  }

  if(command === prefix + 'vael'){
    if(message.author.username === 'Nighteyes') {
      message.channel.send( message.author + ' you are a cutie! <3');
    } else if(remaining === 'sleep') {
      message.channel.send("VAEL, GO THE FLARK TO SLEEP!");
    } else {
      message.channel.send( 'Vael is a cutie!');
    }
  }

  if(command === prefix + 'iver') {
    if(message.author.username === 'SecretlyPaul Worships a 🐍God') {
      message.channel.send( message.author + ' there has to be a pun here somewhere... I am serpens about it');
    } else if (message.author.username === 'Nighteyes'){
      message.channel.send('*sprays water bottle*');
    } else {
      message.channel.send("It's Iver, there's a pun somewhere");
    }
  }

  if(command === prefix + 'xavier') {
    if (message.author.username === 'TheRogue16') {
      message.channel.send('A good good Chair');
    } else if (message.author.username === 'Nighteyes') {
      message.channel.send("Xavier, you are great. Don't forget it...")
    } else if (message.author.username === 'LichMaster98') {
      message.channel.send(message.author + ' is my programmer. Please send bug reports his way!')
    } else {
      if (Math.floor(Math.random() * 2) == 1) {
        message.channel.send("The Chair of the Astral Synedrium, if you have any concerns with the operations of the Synedrium please reach out to him.");
      } else {
        message.channel.send("A smart lovely boi");
      }
    }
  }

  if(command === prefix + 'adella') {
    if (message.author.username === 'Nighteyes') {
      message.channel.send("Adella is a lovely person!");
    } else if (message.author.username === 'LichMaster98') {
      message.channel.send("Adella, the Empress of Death and Executor of OOC Far Verona");
    } else if (message.author.username == 'TheRogue16') {
      message.channel.send(message.author + ' you should not write as much lore, but it is awesome');
    } else {
      message.channel.send("Empress Adella, Soul Mother, Messiah as Gravekeeper, She who Remembers...");
    }
  }

  if(command === prefix + 'div') {
    if (message.author.username === 'PotentiallyRob') {
      message.channel.send("Division, the best Au*zz*ie around. Also he's made some awesome music use !FarVeronaOST for more information.");
    } else if (message.author.username === 'LichMaster98') {
      message.channel.send("Divison, is cool.");
    } else {
      message.channel.send("Taxarch, Actuator of the offices of the Taxarch, voice amongst three in the 1457th Triumvirate, Count Eridanus Division 8A Paragraph 79 Subsection (c), Son of Viscount Nebulus Bortignon the lessor and Countess Bridgidetta Dahlia Bortignon of Euphradia Upon Tiber");
    }
  }

  if (command === prefix + 'farveronaost') {
    message.channel.send("Check out Division's awesome music: <https://soundcloud.com/taxarchdivision/sets/acheron-rho>");
  }

  if(command === prefix + 'veron') {
    if (message.author.username === 'El K Magnifico') {
      message.channel.send(message.author + " is here to start some trouble.");
    } else {
      message.channel.send('Veron is up to something.]');
    }
  }

  if (command === prefix + 'john') {
    if (message.author.username === 'Duel') {
      message.channel.send(message.author + ", Are you a part of the Ethics Committee I was sent to speak with?");
    } else {
      message.channel.send("The Ethics... wait what there isn't an ETHICS committee??");
    }
  }

  if (command === prefix + 'azuri') {
    if (message.author.username === 'gref_') {
      message.channel.send(message.author + ', you are the most valid. Remember this.')
    } else {
      message.channel.send("Azuri is responsible for the !valid command, please use at your leisure");
    }
  }

  if(command === prefix + 'pert') {
    if(message.author.username === 'Pertinax') {
      if (Math.floor(Math.random() * 2) == 1) {
        message.channel.send(message.author + "\n**[Chorus]** \n AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH");
      } else {
        message.channel.send(message.author + "\nCurrent Mood: https://www.youtube.com/watch?v=hCC6ZhRS7sY");
      }
    } else {
      var int = Math.floor(Math.random() * 2)
      if ( int == 1) {
        message.channel.send("**[Chorus]** \n AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH");
      } else if (int == 2) {
        message.channel.send("Current Mood: https://www.youtube.com/watch?v=hCC6ZhRS7sY");
      } else {
        message.channel.send("A Witty One Liner will go here");
      }
    }
  }

  if (command === prefix + 'czarn') {
    if(message.author.username === 'ColianTV') {
      message.channel.send(message.author + ', the wonderful Czarn, wait... why aren\'t you at a bar on Imperial Prime?');
    } else {
      message.channel.send("Who's Czarn? He's probably at a bar")
    }
  }

  if(command === prefix + 'dolores') {
    if(message.author.username === 'Fruitloop') {
      var num = Math.floor(Math.random()*270);
      message.channel.send(message.author + ", pause after 3 seconds... \n <https://youtu.be/FTQbiNvZqaY?t=" + num + ">");
    } else {
      message.channel.send("A random 3 second clip from Toto's Africa");
    }
  }

  if(command === prefix + 'fine') {
    message.channel.send("https://cdn.vox-cdn.com/thumbor/qLQwKzetpAQyS8IgjO196oSRs1E=/0x0:554x310/920x613/filters:focal(190x186:278x274):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55468225/Screen_Shot_2017_06_27_at_12.36.28_PM.0.png");
    message.channel.send("House Lyra: \"It's FIIIIIIIIIIIIIIIIIIIIIIIIINE\"");
  }

  if(command === prefix +'claus'){
    if(message.author.username === 'Ben') {
      message.channel.send(message.author + ", Have you heard the tale of Emperox Randy the Synth? Emperox randy the wise, it's not a tale the crux would tell you...");
    } else {
      message.channel.send("GODDAMN IT CLAUS")
    }
  }

  if (command === prefix + 'lukas') {
    if(message.author.username === 'Lukas1701') {
      message.channel.send(message.author + ", So say we all!");
    } else {
      var int = Math.floor(Math.random() * 2)
      if ( int == 1) {
        message.channel.send("Everyone's favorite Naval Officer.");
      } else {
        message.channel.send("We're going to Earth!");
      }
    }
  }

  if (command === prefix + 'horatius') {
    if(message.author.username === 'Haresus') {
      message.channel.send(message.author + ", says \"I am the Convocation\"");
    } else {
      message.channel.send("\"I am the Convocation\"");
    }
  }

  if (command === prefix + 'rosa') {
    if(message.author.username === 'MsVenture') {
      message.channel.send(message.author + ", you are the communist revolution");
    } else {
      message.channel.send("\"They will withhold democracy from you for as long as they can! The only method left to them is to stamp you out and make you complacent! Your presence here today shows you as part of a larger movement! One that will no longer sit idly by as you continue to be trampled! Take the vote and take the reigns back from them!\"");
    }
  }

  if (command === prefix + 'hyperbilus') {
    if(message.author.username === 'Leither') {
      message.channel.send(message.author + ", That's not how it works. That's not how any of this works.");
    } else {
      message.channel.send("That's not how it works. That's not how any of this works.");
    }
  }

  if (command === prefix + 'sart') {
    if(message.author.username === 'ClayProof') {
      message.channel.send(message.author + ", Are you the Ethics committee I'm supposed to meet?");
    } else {
      message.channel.send("Pythagoras Lord Manager of the MCP-Δ-NovaSun Meta Engineer Triangulum Triangulum Sart. Atriarch of the Triangulum Triangulum Family");
    }
  }

  if (command === prefix + 'josef') {
    if(message.author.username === 'No_Whey12') {
      message.channel.send(message.author + ", you've said, \"We have a month. A month is not that long.\"");
    } else {
      message.channel.send("Adam has a schedule, and he doesn't care what we do, so let's get this shit done.");
    }
  }

  if(command === prefix + 'azure') {
    if(message.author.username === 'Master Metroid') {
      message.channel.send(message.author + ", Aren't you just the best West Marches Stars without Numbers GM!");
    } else {
      message.channel.send("\"Damn. RIP me.\" ~Azure");
    }
  }

  //HROA SERVER - FOR Vael
  if (message.guild.name === 'Hroa') {

    //Usage: !desc <location>
    if (command === prefix + 'desc') {

      location = remaining.toLowerCase();

      var path = "./documents/discordbot2/hroa/" + location + ".txt";
      fs.readFile(path, 'utf8',(err, data) => {
        if (err) {
          console.log(err);
          message.channel.send("No description available for this location.");
        } else {
          message.channel.send(data);
          console.log("File read successfully");
        }
      });
    }

    //Usage !add <location> [Multi-word description of location]
    if (command === prefix + 'add') {
      var roles = message.member.roles;
      if(roles.find('name','Radmin')) {
          //message.channel.send("Radmin Acquired!");
          space = remaining.search(" ");
          if (space != -1) {
            var location = remaining.substring(0,space).toLowerCase();
            var remaining = remaining.substring(space+1,remaining.length);
          } else {
            message.channel.send(message.author+", you didn't provide a location or description. For more information use !help add");
            console.log ("No Location Given");
            return;
          }
          message.channel.send("Writing file... please wait before submitting another one");
          var path = "./documents/discordbot2/hroa/" + location + ".txt";
          fs.writeFile(path,remaining,'utf8', (err) => {
              if (err) {
                console.log(err);
                message.channel.send(message.author + ", there was a Failure to save description");
              } else {
                confirmWrite(message.author,location,message.channel);
                console.log('The file has been saved!');
              }
          });
      }
    }
    //Nested Command Structure?? !<command> <argument> [Extra]
    // const descCommands = ['new','append','modify','delete','list','help'];
    //Admin Commands:
    if (command == prefix + 'test') {
      space = remaining.search(" ");
      if (space != -1) {
        var argument = remaining.substring(0,space).toLowerCase();
        var remaining = remaining.substring(space+1,remaining.length);
      } else { //Deafult, assumes location provided for Description
        var location = remaining.toLowerCase();
        var path = "./documents/discordbot2/hroa/" + location + ".txt";
        fs.readFile(path, 'utf8',(err, data) => {
          if (err) {
            console.log(err);
            message.channel.send("No description available for this location.");
          } else {
            var nameEnd = data.search("\n");
            var author = data.substring(0,nameEnd);
            var rest = data.substring(nameEnd+1,data.length);
            if(rest.length > 2000) {
              //To handle searching for | characters
            } else {
              message.channel.send(rest);
            }
            console.log("File read successfully");
          }
        });
        return;
      }
      var i;
      for (i = 0; i < descCommands.length; i++) {
        if ( descCommands[i] === argument) {
          break;
        }
      }
      switch(i) {
        case 0: //New
          space = remaining.search(" ");
          if (space != -1) {
            var location = remaining.substring(0,space).toLowerCase();
            var remaining = remaining.substring(space+1,remaining.length);
          } else {
            message.channel.send("Hello, I'm your narrator. For help with this command please use !desc help new");
            return;
          }
          if (onList(location)) {
            message.channel.send("Oh, looks like this location already has a description. To change it please use !desc modify " + location + " [new Text] if you are the author. Otherwise contact a RADMIN for assistance.");
          } else {
            if(message.channel.name === 'bot-commands' || message.channel.parent.name === 'admin channels') {
              message.channel.send("Writing file... please wait before submitting another one");
              var path = "./documents/discordbot2/hroa/" + location + ".txt";
              remaining = message.author.username + "\n" + remaining;
              fs.writeFile(path,remaining,'utf8', (err) => {
                if (err) {
                  console.log(err);
                  message.channel.send(message.author + ", there was a Failure to save description");
                } else {
                  confirmWrite(message.author,location,message.channel);
                  console.log('The file has been saved!');
                }
              });
            }
          }
          break;
        case 1: //Append
          space = remaining.search(" ");
          var path = "./documents/discordbot2/hroa/" + location + ".txt";
          if (space != -1) {
            var location = remaining.substring(0,space).toLowerCase();
            var remaining = remaining.substring(space+1,remaining.length);
          } else {
            message.channel.send("Hello, I'm your narrator. For help with this command please use !desc help append");
            return;
          }
          if (onList(location)) {
            var roles = message.member.roles;
            var text;
            fs.readFile(path, 'utf8',(err, data) => {
              if (err) {
                console.log(err);
                message.channel.send("Error Reading File. Please wait a few moments and try again.");
              } else {
                text = data;
                console.log("Loaded read successfully");
              }
            });
            var nameEnd = text.search("\n");
            var name = text.substring(0,nameEnd);
            if(roles.find('name','Radmin') || message.author.username === name ) {
              if(message.channel.name === 'bot-commands' || message.channel.parent.name === 'admin channels') {
                remaining = "|" + remaining;
                fs.appendFile(path,remaining, (err) => {
                  if (err) {
                    console.log(err);
                    message.channel.send(message.author + ", there was a Failure to modify the description");
                  } else {
                    confirmWrite(message.author,location,message.channel);
                    console.log('The file has been appended!');
                  }
                });
              } else {
                message.channel.send("Please try this command again in #bot-commands");
              }
            } else {
              message.channel.send("I'm sorry, " + message.author + " you don't have access to use this command.");
              return;
            }
          } else { //Handle Location not Existing
            console.log("Someone tried to append an uncreated file... I guess I'll accept that");
            if(message.channel.name === 'bot-commands' || message.channel.parent.name === 'admin channels') {
              message.channel.send("Writing **NEW** file... please wait before submitting another one");
              var path = "./documents/discordbot2/hroa/" + location + ".txt";
              remaining = message.author.username + "\n" + remaining;
              fs.writeFile(path,remaining,'utf8', (err) => {
                if (err) {
                  console.log(err);
                  message.channel.send(message.author + ", there was a Failure to save description");
                } else {
                  confirmWrite(message.author,location,message.channel);
                  console.log('The file has been saved!');
                }
              });
            }
          }
          break;
        case 2: //Modify
          var roles = message.member.roles;
          space = remaining.search(" ");
          var path = "./documents/discordbot2/hroa/" + location + ".txt";
          if (space != -1) {
            var location = remaining.substring(0,space).toLowerCase();
            var remaining = remaining.substring(space+1,remaining.length);
          } else {
            message.channel.send("Hello, I'm your narrator. For help with this command please use !desc help append");
            return;
          }
          if (onList(location)) {
            var roles = message.member.roles;
            var text;
            fs.readFile(path, 'utf8',(err, data) => {
              if (err) {
                console.log(err);
                message.channel.send("Error Reading File. Please wait a few moments and try again.");
              } else {
                text = data;
                console.log("Loaded read successfully");
              }
            });
            var nameEnd = text.search("\n");
            var name = text.substring(0,nameEnd);
            if(roles.find('name','Radmin') || message.author.username === name ) {
              if(message.channel.name === 'bot-commands' || message.channel.parent.name === 'admin channels') {
                message.channel.send("Writing file... please wait before submitting another one");
                var path = "./documents/discordbot2/hroa/" + location + ".txt";
                remaining = message.author.username + "\n" + remaining;
                fs.writeFile(path,remaining,'utf8', (err) => {
                  if (err) {
                    console.log(err);
                    message.channel.send(message.author + ", there was a Failure to save description");
                  } else {
                    confirmWrite(message.author,location,message.channel);
                    console.log('The file has been saved!');
                  }
                });
              } else {
                message.channel.send("Please try this command again in #bot-commands");
              }
            } else {
              message.channel.send("I'm sorry, " + message.author + " you don't have access to use this command.");
              return;
            }
          } else {
            message.channel.send("This location doesn't exist. Please try !desc list for the full list");
          }
          break;
        case 3: //Delete
          var roles = message.member.roles;
          space = remaining.search(" ");
          var path = "./documents/discordbot2/hroa/" + location + ".txt";
          if (space != -1) {
            var location = remaining.substring(0,space).toLowerCase();
            var remaining = remaining.substring(space+1,remaining.length);
          } else {
            message.channel.send("Hello, I'm your narrator. For help with this command please use !desc help append");
            return;
          }
          if (onList(location)) {
            var roles = message.member.roles;
            var text;
            fs.readFile(path, 'utf8',(err, data) => {
              if (err) {
                console.log(err);
                message.channel.send("Error Reading File. Please wait a few moments and try again.");
              } else {
                text = data;
                console.log("Loaded read successfully");
              }
            });
            var nameEnd = text.search("\n");
            var name = text.substring(0,nameEnd);
            if(roles.find('name','Radmin') || message.author.username === name ) {
              if(message.channel.name === 'bot-commands' || message.channel.parent.name === 'admin channels') {
                fs.unlink(path, (err) => {
                  if (err) {
                    console.log(err);
                    message.channel.send(message.author + ", the file was unable to be deleted");
                  } else {
                    message.channel.send(message.author + ", the file was deleted");
                  }
                });
              } else {
                message.channel.send("This location doesn't exist. Please try !desc list for the full list");
              }
            } else {
              message.channel.send("I'm sorry, " + message.author + " you don't have access to use this command.");
            }
          } else {
            message.channel.send("This location doesn't exist. Please try !desc list for the full list");
          }
          break;

        case 4: //List

          break;

        case 5: //Help

          break;

        default:
          return;
          break;
      }

    }
  }

  //Ease of Access Testing

  /*if(command === prefix + 'user') {
    message.channel.send(message.author.username);
  }

  if(command === prefix + 'channel') {
    message.channel.send(message.channel.name);
  }*/

  if(command === prefix + 'quit') {
    if(message.author.username === 'LichMaster98') {
      console.log("I am quiting now. Good-Bye!");
      message.channel.send("Quitting... good-bye!");
      client.destroy();
    }
  }

  console.log("I executed command " + command + " with additional parameters of " + remaining);
});

client.on('error', error => {
  console.log("Error, shutting down gracefully");
  console.log(error);
  //DATA STORAGE STUFF?
  client.destroy();
});

// Log our bot in
client.login(token);
