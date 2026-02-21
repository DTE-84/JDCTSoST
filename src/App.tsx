import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './index.css';

interface Story {
  id: string | number;
  title: string;
  subtitle?: string;
  content: string[];
  image: string;
  portrait?: string;
  gallery?: string[];
  isAbout?: boolean;
}

const stories: Story[] = [
  {
    id: "about",
    isAbout: true,
    title: "The Sum of Small Things",
    subtitle: "Notes on Life and Living….And Some Dumb Stuff Too",
    portrait: "assets/JDCSOLO.png",
    content: [
      "Former lawyer and recovering pastor. Freelance writer and author of three half-finished novels, dozens of half-completed blogs, and hundreds of half-baked ideas.",
      "I've learned life is lived in the little things, and it's the sum of those little things that make living worthwhile.",
      "About a Book",
      "Christopher Hitchens is thought to have said, “Everybody does have a book in them, but in most cases that’s where it should stay.” He may be right, but I have one coming out anyway. Stay tuned."
    ],
    image: "assets/golf3.avif"
  },
  {
    id: 1,
    title: "Persistence is Not Enough",
    content: [
      "I love the game of golf. I’ve played it most of my life and have great memories of both good and not so good days on the links. My best friendships were forged through the game of golf.",
      "Because I love the game, I am an avid fan of the professional sport. I also realize that many people couldn’t care less. So while this post is about a golfer, it’s not about golf. It’s about something much bigger.",
      "We love our sports and entertainers, and more broadly, our success stories. There is an amazing power in witnessing someone else achieve big dreams. There is real joy in celebrating talent, desire and persistence. I think that’s one reason we deify our professional athletes and take ownership of their exploits as fans. It’s more than vicarious living. It’s recognition of talent, hard work and persistence, traits which we may possess in some measure, but not in abundance. It’s our way of identifying with others who represent the best of us.",
      "And while we tend to deify our athletic heroes, we like them to be humble. We want them to be good people, just like us, only better at sports. Marketing people know this, and so they cultivate reputations for their clients. Its often shocking to learn that your sports idol is, well, a dick.",
      "So it’s fun when we learn that there are genuine good guys and gals out there playing sports at the highest level. I saw a news piece on a PGA professional a couple of years ago that really stuck with me. I think about it often.",
      "It was about a golfer named Lanto Griffin. Besides having a really cool name—maybe the best on tour—he had a great backstory. He did not grow up with a silver spoon golf resume—private coaches, unlimited funds to play junior events, etc. He grew up in a mountain town miles away from a golf course. His dad died when Lanto was 12. His single mom realized he had some talent and made sure he was able to trek into town to play golf at an inauspicious course. The club gave him a membership and the golf pro there, a guy named Steve Prater, took notice of his ability and took him under his wing, never charging him a dime for lessons. There were others who helped with financial backing along the way as he made his way to college golf, then through the Latin American Tour and Korn Ferry tour to the PGA Tour. In short, there were a bunch of folks who saw this kid and helped him realize a dream.",
      "Lanto Griffin’s story sticks with me because when I saw him interviewed on a television show, I heard him talk about his journey and the power of…”persistence” my wife filled in as I was relaying it to her. I got the same fill-in-the-blank response from a friend with whom I also shared that piece. It seemed obvious, after all. In America our underdog stories are a testament to individual persistence in the face of adversity. So both my wife and friend filled in the blank with the obvious self-motivatinal trope. Success comes with the power of persistence.",
      "They were both wrong.",
      "That’s not what Lanto Griffin said. He said that his journey was realized through the “power of generosity.” He acknowledged that his success was attributable not just to his own desire and skill but to the generosity of those, like the golf pro and his financial patrons, who selflessly gave to him so that he might realize his dream.",
      "That’s a guy worth rooting for, a guy that truly represents the best of America and the generosity of the American spirit.",
      "How cool is that?"
    ],
    image: "assets/golf1.png"
  },
  {
    id: 2,
    title: "The Doctor is In (Character)",
    content: [
      "Not that long ago, we purchased a doctor kit for Christmas for our granddaughter, Layla. Her parents are medical professionals and that’s what she wanted, so that’s what we gave her. What I didn’t realize at the time was that she would interpret the medical kit as license to actually practice medicine. What I also didn’t realize was that my granddaughter is a method actor of the highest order. When she donned her plastic stethoscope, she was a doctor. Note her seriousness.",
      "Her devotion to the “doctor” role became apparent when she began examining me in the living room after dinner one night. Her mom called to her from the kitchen and told her to clear her plate. Dr. Layla looked up with annoyance while checking my blood pressure and said, “No. Can’t you see I’m very busy here”?",
      "And she was. I was undergoing a battery of tests and Dr. Layla was intently administering them all. Now, my daughter has inherited my trait of benign indulgence, so Layla’s refusal to clear her plate went unacknowledged for a few more minutes until her mom called to her again to clear her plate and place it in the dishwasher. This time Layla didn’t even look up. She held up her hand while poking my abdomen and said, “I’m very busy here.”",
      "I’m pretty sure Layla never cleared her plate. I am completely sure she offered a very specific diagnosis following my examination. Dr. Layla pulled the rubber reflex mallet from her bag, hit me in the middle of the forehead, and announced that I needed a new brain. A more accurate diagnosis has never been given.",
      "She also mentioned that it would be very expensive. It would cost one dollar.",
      "All of that is preamble to the purpose of this post. My granddaughter is a creative child. She became a doctor when she donned a doctor’s clothes. Recently, she insisted on being called Trudy after watching the movie “Young Woman and the Sea” about Trudy Ederle swimming the English Channel. She decided she was ready to swim across the channel, determined really. She even lubed up before her swimming lesson in the local pool. Not that long ago, she was “Mean Puppy,” growling and biting everyone around her. Her mom had to say “quit licking people. That’s weird.” Mean Puppy responded with growls and lunging nips at Katie’s arm.",
      "And while it may seem weird to go around on all fours licking people, I hesitate to discourage it. We need creative people. We need those who become immersed in character to do what they do. Most of all, we need to refrain from stifling our children’s very nature. There are lot’s of rules out there. Sometimes, we should let our kids break them.",
      "Who knows, we might need a brain replacement surgeon someday."
    ],
    image: "assets/golf2.avif",
    gallery: ["assets/gdaughter1.webp", "assets/gdaughter2.webp"]
  },
  {
    id: 3,
    title: "That Time I Nailed Valentine’s Day",
    content: [
      "So, a friend of ours posted on Facebook a rather romantic remembrance for Valentine’s Day. She wrote about how her husband of 40+ years had walked to her dorm room and given her a rose in the way distant past and had today given her chocolates some 44 Valentines later.",
      "It was a nice story and had me thinking about my own Valentine’s Day with my wonderful wife. It’s maybe helpful to know that we are in the midst of a bathroom renovation that requires us to sleep in a spare bedroom and has disrupted our weekly routine. Actually that’s not helpful, I realize, but I’m trying to feel better about today, so…",
      "Here was my conversation with the love of my life as I emerged from our spare bedroom and found a pink card on the kitchen table. You should probably know that we too have been together a long time—46 years—I’m almost certain. Anyway, here’s the conversation:",
      "Me: What is this pink card on the table",
      "Anne: It’s Valentine’s Day.",
      "Me: I thought we agreed, like 10 years ago, that we didn’t care about Valentine’s Day.",
      "Anne: I don’t remember that. And anyway, I just got you a card, so it’s no big deal.",
      "Me: I’m pretty sure we agreed that Valentine’s Day is a contrived holiday with no real connection to Saint Valentine and is, in fact, a cynical money grab for Hallmark cards, jewelers and chocolatiers.",
      "Anne: Pretty sure we made no such agreement.",
      "Me: Pretty sure we did.",
      "Anne: I think I remember you saying something like that.",
      "Me: Sounds like me, but I’m pretty sure you agreed.",
      "Anne: I don’t think so, but I don’t care. I just wanted you to know how much I love you.",
      "Me (squinting suspiciously): That can’t be right.",
      "Anne: Well, there it is.",
      "Me: I feel like a terrible husband…though we did agree…Can I do anything for you Paint your nails Call and yell at people you feel like yelling at but don’t want to Breakfast burrito",
      "Anne: No, that’s ok, really.",
      "Me: How about I run to Hy Vee and get you a Diet Coke",
      "Anne: That would be great.",
      "And so I did. That’s right fellas, I am the best at Valentine’s Day."
    ],
    image: "assets/19thbar.jpg"
  },
  {
    id: 4,
    title: "Of Boys and Bees",
    content: [
      "So Anne and I are on FaceTime with my 4 year old grandson Brock, and he’s relaying his recent play date with his cousins. It’s important to know that every sentence from Brock seems a declaration that escalates in volume. He’s excited by pretty much everything. He’s very smart, but he’s also a little boy who does, well, little boy stuff without a refined sense of consequences. It’s also important to know that his cousin Jay is also 4 years old.",
      "Brock: Hey Papa! We were at cousins’ house and there were BEES!",
      "Me: Wow. There were bees in the house?",
      "Brock: Yeah…NO, the bees were at the PLAYGROUND!",
      "Me: Well, I’m glad there were no bees in the house.",
      "Brock: Yeah. That would not be good… And guess what? A bee stung me in the HEAD!",
      "Me: Ouch. That must have hurt.",
      "Brock: Yeah. Me and Jay were THROWING THINGS AT THEM!",
      "Me: You were throwing things at the bees?",
      "Brock: Yeah. I was throwing pine cones and Jay was throwing SODA CANS!",
      "Me: Well…that’s probably not a good idea.",
      "Brock: No. We wanted them to go away. BUT THEY WOULDN’T!",
      "Grandma: [ever the teacher]: And what did you learn?",
      "Brock: [Long pause] Bees will STING YOU!",
      "Grandma: And?…",
      "Brock: It HURTS!",
      "Grandma: And?…",
      "Brock: [long pause yet again]: Bees are DANGEROUS!",
      "Grandma [giving up]: Well, bees can be dangerous if you don’t leave them alone, but if you leave them alone bees will leave you alone.",
      "Brock: Yeah… HEY, you should come see our FORT! [runs off into another room].",
      "3 year old Layla: [sauntering by]: Bees are difficult.",
      "I’m not sure there is a lesson there, but there is affirmation. Four year old boys will do dumb stuff and their more observant sisters will deliver wisdom."
    ],
    image: "assets/golf3.avif",
    gallery: ["assets/thekids.webp"]
  },
  {
    id: 5,
    title: "R.I.P. PJ",
    content: [
      "If you’ve not heard of PJ O’Rourke, I feel sorry for you. If you’ve read nothing he’s written, you should do so. Starting right now would be good.",
      "PJ O’Rourke died yesterday at age 74. Google him if you wish to read about his journalistic credentials and/or tributes from those who actually knew him. I had the pleasure of meeting him once at a meet-and-greet following a speaking engagement where I snagged a signed copy of one of his books. I was a Fanboy. As I write, I’m looking at my bookshelf where I have a section devoted to his work. I own every book he wrote.",
      "PJ was both brilliant and laugh out loud funny. Though he was a self proclaimed reformed leftist, now conservative, I always viewed his take on things as eminently sensible and relatable to anyone with a modicum of libertine tendencies, i.e. most of us. He was an equal opportunity skewer of the power-lusting politician and the inevitable bureaucratic evil that results when we entrust our fate to people who think they can fix it all with more money. His book “Republican Party Reptile” should be mandatory reading for every sanctimonious left-leaning ideologue who wishes to dump every right-leaning American into the vat of stupidity on display last January 6. Likewise, every conservative politician would do well to pay attention to PJ’s take on that giant ass-hat of humanity that is Donald Trump.",
      "I could go on, but I’m kind of sad that PJ O’Rourke has left us.",
      "I am a collector of quotes. I have an entire file on PJ O’Rourke, so I’ll end by sharing a select few. There are gems in here, so bear with me on the length.",
      "Quotes from PJ:",
      "\"I think the Baby Boom does have a tendency to get its nose in everything. The Greatest Generation had a better tendency to leave people alone. Of course, they also had a better tendency to hate everybody’s guts.\"",
      "\"Giving money and power to government is like giving whiskey and car keys to teenage boys.\"",
      "\"Making fun of born-again Christians is like hunting dairy cows with a high powered rifle and scope.\"",
      "\"Earnestness is stupidity gone to college.\"",
      "\"If you spend 72 hours in a place you’ve never been, talking to people whose language you don’t speak about social, political, and economic complexities you don understand, and you come back as the world’s biggest know-it-all, you’re a reporter. Either that or you’re President Obama.\"",
      "\"People will tell you anything but what they do is always the truth.\"",
      "\"The idea of a news broadcast once was to find someone with information and broadcast it. The idea now is to find someone with ignorance and spread it around.\"",
      "\"America has to act. But, when America acts, other nations accuse us of being ‘hegemonistic’, of engaging in ‘unilateralism’, of behaving as if we’re the only nation on earth that counts. We are.\"",
      "\"Term limits aren’t enough. We need jail.\"",
      "\"At the core of liberalism is the spoiled child — miserable, as all spoiled children are, unsatisfied, demanding, ill-disciplined, despotic and useless. Liberalism is a philosophy of sniveling brats.\"",
      "\"The free market is ugly and stupid, like going to the mall; the unfree market is just as ugly and just as stupid, except there is nothing in the mall and if you don’t go there they shoot you.\"",
      "\"I was having dinner…in London…when eventually he got, as the Europeans always do, to the part about “Your country’s never been invaded.” And so I said, “Let me tell you who those bad guys are. They’re us. WE BE BAD. We’re the baddest-assed sons of bitches that ever jogged in Reeboks. We’re three-quarters grizzly bear and two-thirds car wreck and descended from a stock market crash on our mother’s side. You take your Germany, France, and Spain, roll them all together and it wouldn’t give us room to park our cars. We’re the big boys, Jack, the original, giant, economy-sized, new and improved butt kickers of all time. When we snort coke in Houston, people lose their hats in Cap d’Antibes. And we’ve got an American Express card credit limit higher than your piss-ant metric numbers go. You say our country’s never been invaded? You’re right, little buddy. Because I’d like to see the needle-dicked foreigners who’d have the guts to try. We drink napalm to get our hearts started in the morning. A rape and a mugging is our way of saying ‘Cheerio.’ Hell can’t hold our sock-hops. We walk taller, talk louder, spit further, fuck longer and buy more things than you know the names of. I’d rather be a junkie in a New York City jail than king, queen, and jack of all Europeans. We eat little countries like this for breakfast and shit them out before lunch.\"",
      "\"The second item in the liberal creed, after self-righteousness, is unaccountability. Liberals have invented whole college majors–psychology, sociology, women’s studies–to prove that nothing is anybody’s fault. No one is fond of taking responsibility for his actions, but consider how much you’d have to hate free will to come up with a political platform that advocates killing unborn babies but not convicted murderers. A callous pragmatist might favor abortion and capital punishment. A devout Christian would sanction neither. But it takes years of therapy to arrive at the liberal view.\"",
      "\"The three branches of government number considerably more than three and are not, in any sense, ‘branches’ since that would imply that there is something they are all attached to besides self-aggrandizement and our pocketbooks. … Government is not a machine with parts; it’s an organism. When does an intestine quit being an intestine and start becoming an asshole?\"",
      "\"The principal feature of American liberalism is sanctimoniousness. By loudly denouncing all bad things — war and hunger and date rape — liberals testify to their own terrific goodness. More important, they promote themselves to membership in a self-selecting elite of those who care deeply about such things…. It’s a kind of natural aristocracy, and the wonderful thing about this aristocracy is that you don’t have to be brave, smart, strong or even lucky to join it, you just have to be liberal.\"",
      "\"Freedom is not empowerment. Empowerment is what the Serbs have in Bosnia. Anybody can grab a gun and be empowered. It’s not entitlement. An entitlement is what people on welfare get, and how free are they? It’s not an endlessly expanding list of rights – the “right” to education, the “right” to food and housing. That’s not freedom, that’s dependency. Those aren rights, those are the rations of slavery – hay and a barn for human cattle.\""
    ],
    image: "assets/golf4.jpg"
  }
];

const RomanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"];

const StorySection: React.FC<{ 
  story: Story; 
  index: number; 
  containerRef: React.RefObject<HTMLDivElement | null>;
  setActiveIndex: (index: number) => void;
}> = ({ story, index, containerRef, setActiveIndex }) => {
  const ref = useRef(null);
  const isAbout = story.isAbout;
  const storyIndex = isAbout ? -1 : (typeof story.id === 'number' ? story.id - 1 : index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(storyIndex);
        }
      },
      {
        root: containerRef.current,
        threshold: 0.5
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [storyIndex, containerRef, setActiveIndex]);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef as React.RefObject<HTMLDivElement>,
    offset: ["start end", "center center", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.1, 0.75, 0.9], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.1, 0.75, 0.9], [300, 0, 0, -200]); 
  const rotateX = useTransform(smoothProgress, [0, 0.1, 0.75, 0.9], [15, 0, 0, -15]);
  const blur = useTransform(smoothProgress, [0, 0.1, 0.75, 0.9], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 0.35, 0.35, 0]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.2, 1.05]);

  return (
    <section ref={ref} id={isAbout ? "story-about" : `story-${storyIndex}`} className="story-section">
      <motion.div 
        className="story-background"
        style={{ 
          backgroundImage: `url(${story.image})`,
          opacity: backgroundOpacity,
          scale: backgroundScale
        }}
      />
      
      <motion.div 
        className="story-content-wrapper"
        style={{ opacity, y, rotateX, filter: blur, perspective: "1200px" }}
      >
        <div className={`story-card ${isAbout ? 'about-card' : ''}`}>
          <div className="card-texture"></div>
          
          {isAbout && story.portrait && (
            <div className="portrait-container">
              <img src={story.portrait} alt="Author Portrait" className="about-portrait" />
            </div>
          )}

          <h2 className="story-title">{story.title}</h2>
          {story.subtitle && <h3 className="story-subtitle">{story.subtitle}</h3>}
          
          <div className="story-divider"></div>
          
          {story.gallery && (
            <div className={`story-gallery ${story.gallery.length === 1 ? 'single-img' : ''}`}>
              {story.gallery.map((img, i) => (
                <div key={i} className="gallery-frame">
                  <img src={img} alt={`Gallery ${i}`} className="gallery-img" />
                </div>
              ))}
            </div>
          )}

          <div className="story-body">
            {story.content.map((paragraph, i) => {
              const isLast = i === story.content.length - 1;
              const isDialog = paragraph.includes(':') && !paragraph.startsWith('"');
              const isQuote = paragraph.startsWith('"') || (story.title === "R.I.P. PJ" && i >= 6);
              const isTeaserTitle = paragraph === "About a Book";
              
              return (
                <p 
                  key={i} 
                  className={`story-paragraph 
                    ${isLast ? 'last-para' : ''} 
                    ${isDialog ? 'dialog-para' : ''} 
                    ${isQuote ? 'quote-para' : ''}
                    ${isTeaserTitle ? 'teaser-title' : ''}
                  `}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

function App() {
  console.log("App Component Init");
  const [isEntered, setIsEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToStory = (index: number) => {
    const main = containerRef.current;
    if (!main) return;
    const targetScroll = (index + 1) * (main.clientHeight * 1.2);
    main.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isEntered) return;
    const main = containerRef.current;
    const handleScroll = () => {
      if (main && main.scrollTop > 50) setHasScrolled(true);
      else setHasScrolled(false);
    };
    main?.addEventListener('scroll', handleScroll);
    return () => main?.removeEventListener('scroll', handleScroll);
  }, [isEntered]);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div 
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="intro-modal"
            onClick={() => {
              console.log("Entering Study...");
              setIsEntered(true);
            }}
          >
            <div 
              className="intro-bg-image"
              style={{ backgroundImage: 'url("assets/golf3.avif")' }}
            ></div>
            <div className="intro-overlay"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="intro-content"
            >
              <div className="sign-frame">
                <img src="assets/jdcsign.png" alt="JDC Sign" className="jdc-sign" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="intro-manifesto"
              >
                “Between the 18th green and the blank page, I spend my time observing the human condition. I write short stories that explore the same principles I find on the course: that a great result takes focus, a bit of luck, and the willingness to play the ball where it lies.”
              </motion.div>
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="enter-hint"
              >
                Click Anywhere to Enter
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="site-wrapper"
          >
            <Header />
            
            <nav className="toc-sidebar toc-left">
              <h3 className="toc-header">Front 9</h3>
              {RomanNumerals.slice(0, 9).map((num, i) => (
                <button 
                  key={i} 
                  className={`toc-item ${activeIndex === i ? 'active' : ''} ${i >= stories.filter(s => !s.isAbout).length ? 'placeholder' : ''}`}
                  onClick={() => scrollToStory(i)}
                >
                  <span className="toc-num">{num}</span>
                  <span className="toc-title">{stories.filter(s => !s.isAbout)[i]?.title || "Upcoming Writing"}</span>
                </button>
              ))}
            </nav>

            <nav className="toc-sidebar toc-right">
              <h3 className="toc-header">Back 9</h3>
              {RomanNumerals.slice(9, 18).map((num, i) => {
                const actualIdx = i + 9;
                return (
                  <button 
                    key={actualIdx} 
                    className={`toc-item ${activeIndex === actualIdx ? 'active' : ''} ${actualIdx >= stories.filter(s => !s.isAbout).length ? 'placeholder' : ''}`}
                    onClick={() => scrollToStory(actualIdx)}
                  >
                    <span className="toc-num">{num}</span>
                    <span className="toc-title">{stories.filter(s => !s.isAbout)[actualIdx]?.title || "Upcoming Writing"}</span>
                  </button>
                );
              })}
            </nav>

            <AnimatePresence>
              {!hasScrolled && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="scroll-indicator"
                >
                  <span>Scroll to Explore</span>
                  <ChevronDown size={24} color="#d4af37" />
                </motion.div>
              )}
            </AnimatePresence>

            <main ref={containerRef} className="main-content">
              {stories.map((story, index) => (
                <StorySection 
                  key={story.id} 
                  story={story} 
                  index={index} 
                  containerRef={containerRef}
                  setActiveIndex={setActiveIndex}
                />
              ))}
              <div style={{ height: '100vh' }} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
