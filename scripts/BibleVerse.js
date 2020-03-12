window.onload = bibles;

function bibles() {
    var inputs = document.getElementById("input").value.toString().replace(" ", "").toLowerCase();
    var data = Array(bible.length);
    var j = 0;
    for (var i = 0; i < bible.length; i++) {
        if (bible[i].verse.replace(" ", "").toLowerCase().includes(inputs) || inputs == "") {
            data[j] = bible[i];
            j += 1;
        }
    }

    for (var i = 0; i < data.length; i++) {
        if (data[i] != undefined) {
            document.getElementById("heading" + i).innerHTML = data[i].verse
            document.getElementById("message" + i).innerHTML = data[i].message
        } else {
            document.getElementById("heading" + i).innerHTML = ""
            document.getElementById("message" + i).innerHTML = ""
        }

    }



}
var bible = [{
        verse: "John 3:16",
        message: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    },
    {
        verse: "John 1:1",
        message: "In the beginning was the Word, and the Word was with God, and the Word was God."
    },
    {
        verse: "John 14:6",
        message: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me." '
    },
    {
        verse: "Matthew 28:19",
        message: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit"
    },
    {
        verse: "Romans 3:23",
        message: "For all have sinned and fall short of the glory of God "
    },
    {
        verse: "Ephesians 2:8",
        message: "For it is by grace you have been saved, through faith – and this is not from yourselves, it is the gift of God "
    },
    {
        verse: "Genesis 1:1",
        message: "In the beginning God created the heavens and the earth."
    },
    {
        verse: "Acts 1:8",
        message: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
    },
    {
        verse: "2 Timothy 3:16",
        message: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness"
    },
    {
        verse: "Romans 10:9",
        message: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved."
    },
    {
        verse: "Romans 6:23 ",
        message: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. "
    },
    {
        verse: "Acts 2:38",
        message: 'Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit."'
    },
    {
        verse: 'John 1:12',
        message: 'Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God '
    },
    {
        verse: 'Romans 8:28',
        message: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.'
    },
    {
        verse: 'John 1:9',
        message: 'The true light that gives light to everyone was coming into the world.'
    },
    {
        verse: 'Genesis 1:26',
        message: 'Then God said, "Let us make human beings in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground."'
    },
    {
        verse: 'Romans 12:1',
        message: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God – this is true worship."
    },
    {
        verse: 'Romans 5:8',
        message: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.'
    },
    {
        verse: 'Matthew 28:18',
        message: 'Then Jesus came to them and said, "All authority in heaven and on earth has been given to me."'
    },
    {
        verse: 'John 3:3',
        message: 'Jesus replied, "Very truly I tell you, no one can see the kingdom of God without being born again."'
    },
    {
        verse: 'Mark 16:15',
        message: 'He said to them, "Go into all the world and preach the gospel to all creation." '
    },
    {
        verse: 'John 10:10',
        message: 'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.'
    },
    {
        verse: 'John 1:14',
        message: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth. '
    },
    {
        verse: 'Acts 4:12',
        message: '"Salvation is found in no one else, for there is no other name given under heaven by which we must be saved."'
    },
    {
        verse: 'Acts 2:42',
        message: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. "
    },
    {
        verse: 'John 3:1',
        message: 'Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council.'
    },
    {
        verse: 'Galatians 5:22',
        message: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness'
    },
    {
        verse: 'Proverbs 3:5',
        message: 'Trust in the LORD with all your heart and lean not on your own understanding'
    },
    {
        verse: 'Jeremiah 29:11',
        message: 'For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future.'
    },
    {
        verse: 'John 2:1',
        message: "On the third day a wedding took place at Cana in Galilee. Jesus' mother was there,"
    },
    {
        verse: 'Titus 3:5',
        message: "He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit"
    },
    {
        verse: 'Romans 12:2',
        message: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is – his good, pleasing and perfect will."
    },
    {
        verse: 'John 14:1',
        message: '"Do not let your hearts be troubled. Trust in God; trust also in me."'
    },
    {
        verse: 'John 4:1',
        message: 'Now Jesus learned that the Pharisees had heard that he was gaining and baptizing more disciples than John –'
    },
    {
        verse: 'Ephesians 4:11',
        message: 'So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers'
    },
    {
        verse: 'Romans 5:12',
        message: 'Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned –'
    },
    {
        verse: 'Matthew 11:28',
        message: '"Come to me, all you who are weary and burdened, and I will give you rest."'
    },
    {
        verse: 'Romans 5:1',
        message: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ'
    },
    {
        verse: 'Genesis 1:27',
        message: 'So God created human beings in his own image, in the image of God he created them; male and female he created them.'
    },
    {
        verse: 'Romans 1:16',
        message: 'I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.'
    },
    {
        verse: '1 John 1:9',
        message: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.'
    },
    {
        verse: 'Acts 2:1',
        message: 'When the day of Pentecost came, they were all together in one place.'
    },
    {
        verse: '2 Corinthians 5:17',
        message: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'
    },
    {
        verse: 'Hebrews 11:1',
        message: 'Now faith is being sure of what we hope for and certain of what we do not see.'
    },
    {
        verse: '2 Timothy 2:15',
        message: 'Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth. '
    },
    {
        verse: 'Romans 8:1',
        message: 'Therefore, there is now no condemnation for those who are in Christ Jesus'
    },
    {
        verse: 'Romans 10:13',
        message: 'For, "Everyone who calls on the name of the Lord will be saved."'
    },
    {
        verse: 'John 8:32',
        message: '"Then you will know the truth, and the truth will set you free."'
    },
    {
        verse: 'Isaiah 9:6',
        message: 'For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.'
    },
    {
        verse: 'John 14:15',
        message: '"If you love me, keep my commands."'
    },
    {
        verse: 'Deuteronomy 6:4',
        message: 'Hear, O Israel: The LORD our God, the LORD is one.'
    },
    {
        verse: 'John 13:34',
        message: '"A new command I give you: Love one another. As I have loved you, so you must love one another."'
    },
    {
        verse: 'John 4:24',
        message: '"God is spirit, and his worshipers must worship in the Spirit and in truth."'
    },
    {
        verse: 'Philippians 4:13',
        message: 'I can do all this through him who gives me strength. '
    },
    {
        verse: 'Ephesians 2:1',
        message: 'As for you, you were dead in your transgressions and sins'
    },
    {
        verse: 'John 14:16',
        message: 'And I will ask the Father, and he will give you another advocate to help you and be with you forever '
    },
    {
        verse: 'Genesis 1:2',
        message: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. '
    },
    {
        verse: 'Hebrews 4:12',
        message: 'For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart. '
    },
    {
        verse: 'James 5:16',
        message: 'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.'
    },
    {
        verse: 'Isaiah 7:14',
        message: 'Therefore the Lord himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel.'
    },
    {
        verse: 'John 1:7',
        message: 'He came as a witness to testify concerning that light, so that through him all might believe.'
    },
    {
        verse: 'John 3:5',
        message: 'Jesus answered, "Very truly I tell you, no one can enter the kingdom of God without being born of water and the Spirit." '
    },
    {
        verse: 'Philippians 2:5',
        message: 'In your relationships with one another, have the same attitude of mind Christ Jesus had: '
    },
    {
        verse: 'John 1:29',
        message: 'The next day John saw Jesus coming toward him and said, "Look, the Lamb of God, who takes away the sin of the world!"'
    },
    {
        verse: 'Romans 1:18',
        message: 'The wrath of God is being revealed from heaven against all the godlessness and wickedness of human beings who suppress the truth by their wickedness '
    },
    {
        verse: 'Philippians 4:6',
        message: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.'
    },
    {
        verse: 'Hebrews 12:1',
        message: 'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us,'
    },
    {
        verse: 'John 1:3',
        message: 'Through him all things were made; without him nothing was made that has been made.'
    },
    {
        verse: 'Matthew 16:18',
        message: 'And I tell you that you are Peter, and on this rock I will build my church, and the gates of death will not overcome it.'
    },
    {
        verse: 'Acts 17:11',
        message: 'Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true.'
    },
    {
        verse: 'Galatians 2:20',
        message: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.'
    },
    {
        verse: 'Matthew 25:31',
        message: '"When the Son of Man comes in his glory, and all the angels with him, he will sit on his glorious throne."'
    },
    {
        verse: 'Matthew 5:17',
        message: '"Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them."'
    },
    {
        verse: 'Romans 10:17',
        message: 'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ. '
    },
    {
        verse: 'Matthew 6:33',
        message: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well. '
    },
    {
        verse: 'Luke 4:18',
        message: '"The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,"'
    },
    {
        verse: 'John 16:13',
        message: 'But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.'
    },
    {
        verse: 'Acts 20:28',
        message: 'Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God, which he bought with his own blood.'
    },
    {
        verse: 'Titus 2:11',
        message: 'For the grace of God has appeared that offers salvation to all people.'
    },
    {
        verse: 'John 8:44',
        message: "You belong to your father, the devil, and you want to carry out your father's desires. He was a murderer from the beginning, not holding to the truth, for there is no truth in him. When he lies, he speaks his native language, for he is a liar and the father of lies."
    },
    {
        verse: 'Ephesians 6:10',
        message: 'Finally, be strong in the Lord and in his mighty power.'
    },
    {
        verse: 'Romans 13:1',
        message: 'Let everyone be subject to the governing authorities, for there is no authority except that which God has established. The authorities that exist have been established by God. '
    },
    {
        verse: 'John 2:15',
        message: 'So he made a whip out of cords, and drove all from the temple courts, both sheep and cattle; he scattered the coins of the money changers and overturned their tables.'
    },
    {
        verse: 'Mark 16:16',
        message: 'Whoever believes and is baptized will be saved, but whoever does not believe will be condemned. '
    },
    {
        verse: 'Romans 3:10',
        message: 'As it is written: "There is no one righteous, not even one;"'
    },
    {
        verse: 'Genesis 3:15',
        message: '"And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel."'
    },
    {
        verse: 'Hebrews 11:6',
        message: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.'
    },
    {
        verse: 'John 14:26',
        message: 'But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.'
    },
    {
        verse: 'John 5:24',
        message: '"Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life." '
    },
    {
        verse: 'Joel 2:28',
        message: '"And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions." '
    },
    {
        verse: 'Genesis 1:11',
        message: 'Then God said, "Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds." And it was so.'
    },
    {
        verse: 'James 1:2',
        message: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds '
    },
    {
        verse: 'Colossians 1:15',
        message: 'The Son is the image of the invisible God, the firstborn over all creation.'
    },
    {
        verse: 'Matthew 22:37',
        message: 'Jesus replied: "Love the Lord your God with all your heart and with all your soul and with all your mind."'
    },
    {
        verse: 'Titus 2:13',
        message: 'While we wait for the blessed hope – the appearing of the glory of our great God and Savior, Jesus Christ'
    },
    {
        verse: 'Philippians 4:8',
        message: 'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable – if anything is excellent or praiseworthy – think about such things.'
    },
    {
        verse: 'Acts 1:9',
        message: 'After he said this, he was taken up before their very eyes, and a cloud hid him from their sight. '
    },
    {
        verse: 'John 4:7',
        message: 'When a Samaritan woman came to draw water, Jesus said to her, "Will you give me a drink?"'
    },
    {
        verse: 'Micah 6:8',
        message: 'He has shown all you people what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God. '
    },
    {
        verse: 'John 17:17',
        message: 'Sanctify them by the truth; your word is truth. '
    },

]