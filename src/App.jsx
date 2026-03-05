import React, { useState } from 'react';
import { BookOpen, Sparkles, Share2, RefreshCw, Twitter, MessageCircle, Copy, X } from 'lucide-react';

const QUOTES = [
  { book: "Procrastinations", verse: "4:20", text: "Verily, I say unto thee: He who leaveth the dishes in the sink shall find no favor in the eyes of the roommate." },
  { book: "Connectivity", verse: "1:01", text: "Blessed are the flexible, for they shall not be bent out of shape by a slow Wi-Fi connection." },
  { book: "The Commute", verse: "7:15", text: "Lo, even the shortest line at the grocery store shall become the longest once thou joinest it." },
  { book: "Update", verse: "2:10", text: "Thou shalt not ignore the system update, lest your machine perish at the most inconvenient of hours." },
  { book: "Deliverance", verse: "11:59", text: "He who expecteth his Uber Eats to arrive exactly on time is a fool, for the driver knoweth not the shortcut." },
  { book: "Socials", verse: "1:1", text: "Whosoever posteth their workout on the Gram and findeth no likes, hath they even truly lifted?" },
  { book: "Zoom", verse: "5:22", text: "Verily, the mute button is the greatest of graces, yet to forget it is the deepest of sins." },
  { book: "Inbox", verse: "0:0", text: "Strive for Zero, but know that for every email thou deleteth, three more shall take its place." },
  { book: "Assembly", verse: "12:1", text: "And he looked upon the IKEA desk, and lo, there was one screw remaining, and his heart was troubled." },
  { book: "Battery", verse: "1:5", text: "Woe unto him whose phone dieth at five percent, for he hath lived dangerously and lost." },
  { book: "Subscriptions", verse: "9:99", text: "Beware the 'Free Trial', for it is a snare that leadeth to the 'Monthly Recurring Charge' that thou shalt surely forget." },
  { book: "Security", verse: "12:3", text: "He who useth 'Password123' buildeth his house upon the sand, and the hackers shall surely wash it away." },
  { book: "The Feed", verse: "2:24", text: "Verily, the scroll is infinite, but thy sleep is not. Choose wisely, for the blue light is a jealous master." },
  { book: "Dating", verse: "1:1", text: "Blessed is he who swipe-righteth and findeth a match, but cursed is he who findeth only a bot asking for crypto." },
  { book: "The Cloud", verse: "4:04", text: "Thy data is in the heavens, yet when the router faileth, thou art truly alone in the wilderness." },
  { book: "Kitchen", verse: "3:15", text: "Whosoever microwave-eth fish in the office shall be cast out into the outer darkness of the parking lot." },
  { book: "Gaming", verse: "1:2", text: "Blessed are the noobs, for they know not the salt of the competitive lobby." },
  { book: "Fitness", verse: "5:00", text: "The spirit is willing to go to the gym, but the flesh is weak and hath discovered a new series on Netflix." },
  { book: "Finance", verse: "2:50", text: "Thou shalt not look upon thy bank account after a weekend of 'Treating Thyself', lest thou weepest." },
  { book: "Navigation", verse: "10:4", text: "Verily, the GPS leadeth thee to the destination, yet thou shalt still miss the turn and be forced to 'Reroute' for eternity." },
  { book: "Streaming", verse: "4:3", text: "Lo, thou hast spent forty minutes choosing a movie, and now thou art too tired to watch it." },
  { book: "LinkedIn", verse: "1:1", text: "Verily, he who 'humbly' announceth his new role is a Pharisee of the corporate world." },
  { book: "Privacy", verse: "19:84", text: "Thy smart speaker listeneth even when thou art silent; speak only that which thou wouldst have used for targeted ads." },
  { book: "Work", verse: "5:01", text: "Blessed is the worker who closeth his laptop at five, for he shall inherit the evening's peace." },
  { book: "Coffee", verse: "1:1", text: "First the bean, then the brew, then the motivation. Without the first, the latter two are but a dream." },
  { book: "Laundry", verse: "2:1", text: "And lo, the dryer didst swallow the left sock, and it was seen no more among the living." },
  { book: "Shopping", verse: "11:11", text: "Thou shalt not buy the 'As Seen on TV' gadget, for it worketh only in the dreams of the marketers." },
  { book: "Weather", verse: "5:1", text: "The app promised sunshine, yet the rain falleth. Verily, the algorithm knoweth not the clouds." },
  { book: "Storage", verse: "99:1", text: "Thy phone is full of screenshots thou shalt never look upon again. Purge them, or live in the 'Storage Full' purgatory." },
  { book: "Auto", verse: "6:1", text: "The 'Check Engine' light gloweth, yet the car moveth. Verily, thou art living on borrowed time." },
  { book: "Ego", verse: "1:1", text: "He who checketh the likes on his own post every five minutes hath found his own reflection in the digital pond." },
  { book: "Gifts", verse: "12:25", text: "Verily, a gift card is the blessing of the lazy, yet it is received with great joy by the broke." },
  { book: "Selfie", verse: "1:50", text: "She took fifty photos, yet only one was worthy. The other forty-nine are the hidden sins of the camera roll." },
  { book: "Remote", verse: "1:1", text: "Verily, the worker from home may be in his pajamas, yet his Slack status sayeth 'Active'." },
  { book: "Password", verse: "8:12", text: "Thou shalt not use the same password for thy bank and thy pizza app, lest thy hunger lead to thy ruin." },
  { book: "Fridge", verse: "2:00", text: "He who looketh into the fridge for the third time in an hour hopeth for a miracle, but shall find only the same jar of pickles." },
  { book: "Airpods", verse: "1:1", text: "Cursed is the one who loseth the left pod, for the right pod is but a lonely echo of the melody." },
  { book: "Captions", verse: "3:1", text: "Blessed are the subtitles, for they allowest the watching of the show while the partner sleepeth." },
  { book: "Parking", verse: "1:1", text: "And lo, he found a spot near the entrance, and he knew that the heavens were smiling upon him this day." },
  { book: "GroupChat", verse: "1:100", text: "Verily, he who leaveth the group chat without a word is a man of great courage or great exhaustion." },
  { book: "Tupperware", verse: "1:1", text: "Thou shalt have many lids, but no containers; or many containers, but no lids. Such is the trial of the kitchen." },
  { book: "Spam", verse: "4:19", text: "The prince from afar promiseth thee gold, yet he asketh only for thy bank details. Heed him not." },
  { book: "Meeting", verse: "1:1", text: "This meeting couldst have been an email, and this email couldst have been a thought." },
  { book: "Review", verse: "1:5", text: "He who giveth a one-star review because the delivery was slow is a harsh judge of the burger's quality." },
  { book: "Flight", verse: "32:B", text: "Woe unto him who is seated in the middle, for he shall have no armrest and no window to call his own." },
  { book: "Alarm", verse: "7:00", text: "The snooze button is a false prophet; it promiseth rest, but delivereth only panic." },
  { book: "Recycling", verse: "1:1", text: "He who rinseth the yogurt container is a saint among men, for he thinketh of the planet." },
  { book: "Keyboard", verse: "1:1", text: "Cursed is the sticky key, for it maketh the 'L' into an 'LL' and thy message into a mystery." },
  { book: "Browser", verse: "50:1", text: "Thy tabs are many, thy memory is low. Close the ones from three weeks ago, for thou shalt never read them." },
  { book: "Cables", verse: "1:1", text: "And lo, the drawer of cables was a tangled nest of serpents, and no man knew which led to the ancient camera." },
  { book: "Influence", verse: "1:1", text: "She who recommendeth the tea that purgeth the gut seeketh only thy coin, not thy health." },
  { book: "Avatar", verse: "1:1", text: "Thy profile picture is from seven years ago. Verily, time is a thief and the filter is a liar." },
  { book: "Software", verse: "2:0", text: "The update fixed the bug, but lo, it created three more in the place of the one." },
  { book: "Podcast", verse: "1:1", text: "Every man with a microphone thinketh himself a philosopher, but few have the ears to listen." },
  { book: "Plants", verse: "1:1", text: "Thou hast bought the succulent because it 'cannot die', yet lo, it withereth before the week is out." },
  { book: "Gym", verse: "1:1", text: "He who grunted loudly while lifting the weight sought the attention of the room, but found only the judgment of the silent." },
  { book: "Cart", verse: "0:1", text: "Thou hast added the items to the cart, but the shipping fee is a wall thou shalt not cross." },
  { book: "Mirror", verse: "1:1", text: "The mirror telleth the truth, but the lighting in the fitting room is the work of the devil." },
  { book: "Receipts", verse: "1:1", text: "Keep the receipt, for the item shall surely break the moment the return window closeth." },
  { book: "Neighbors", verse: "2:1", text: "Blessed is the neighbor who moweth his lawn at a reasonable hour, for he shall be loved by all." },
  { book: "ScreenTime", verse: "10:1", text: "Thy report sayeth thou hast spent six hours on the TikTok. Verily, thy life is slipping through thy thumb." },
  { book: "Bio", verse: "1:1", text: "A 'Life Enthusiast' and 'Coffee Lover'. Verily, thy bio is as unique as a grain of sand on the shore." },
  { book: "Notifications", verse: "1:1", text: "The red dot is a siren call; it demandeth thy gaze, even when it is but a 'Like' from a stranger." },
  { book: "Venting", verse: "1:1", text: "He who posteth his drama on the Facebook seeketh the sympathy of the masses, but findeth only the gossip of the few." },
  { book: "AutoCorrect", verse: "1:1", text: "Verily, I say 'Duck', but the phone knoweth what I truly meant." },
  { book: "Hustle", verse: "24:7", text: "He who worketh while they sleep shall be very tired when they wake." },
  { book: "Drafts", verse: "1:1", text: "Thy drafts are a graveyard of witty replies thou wert too wise to send." },
  { book: "Meme", verse: "1:1", text: "A picture is worth a thousand words, but a meme is worth a thousand 'LOLs'." },
  { book: "Blockchain", verse: "1:1", text: "He who explaineth the NFT to the unwilling listener shall find himself eating lunch alone." },
  { book: "Quiet", verse: "1:1", text: "Blessed is the library, for it is the only place where the phone is silent and the mind can wander." },
  { book: "Cookies", verse: "1:1", text: "Thou hast accepted the cookies, and now the ads follow thee like a shadow across the web." },
  { book: "RemoteWork", verse: "2:1", text: "The camera is on, the pants are off. Verily, this is the modern way of the professional." },
  { book: "Subway", verse: "4:1", text: "He who standeth on the left of the escalator shall be met with the wrath of the hurried." },
  { book: "Algorithm", verse: "1:1", text: "The algorithm knoweth thy heart better than thy mother, for it hath seen thy search history at midnight." },
  { book: "Biohack", verse: "1:1", text: "He who drinketh the buttered coffee hopeth for eternal life, but findeth only an oily tongue." },
  { book: "Clickbait", verse: "1:1", text: "Thou shalt not believe the tenth thing that will 'shock' thee, for it is but a lie to sell thee insurance." },
  { book: "Unsubscribe", verse: "1:1", text: "Thou hast clicked 'Unsubscribe', yet the emails return like the tide. Verily, the spam is eternal." },
  { book: "Thermostat", verse: "68:1", text: "He who toucheth the thermostat in another man's house risketh the fire of his host's indignation." },
  { book: "Reviews", verse: "4:5", text: "The product hath four stars, but the top review sayeth 'It exploded'. Heed the warning, for the stars may be bought." },
  { book: "Charging", verse: "1:1", text: "Verily, the cable must be wiggled just so, or the power shall not flow. It is a test of thy patience." },
  { book: "Yoga", verse: "1:1", text: "Thou hast bought the mat and the pants, yet thou hast only used them for the napping." },
  { book: "Wine", verse: "1:1", text: "A glass of red is good for the heart, but the whole bottle is a conversation with the floor." },
  { book: "Spoilers", verse: "1:1", text: "Cursed is he who revealeth the ending of the series before the friend hath seen it. He is a betrayer of the highest order." },
  { book: "Ironing", verse: "1:1", text: "He who ironeth only the front of the shirt because he weareth a blazer is a man of great efficiency and hidden shame." },
  { book: "Etsy", verse: "1:1", text: "Thou hast paid forty dollars for a candle that smelleth like 'Rain on a Tuesday'. Verily, thy coin is easily parted." },
  { book: "Ghosting", verse: "1:1", text: "He who vanisheth after the second date leaveth a trail of 'Seen' receipts and unanswered questions." },
  { book: "Keyboard", verse: "1:2", text: "The 'Caps Lock' is a shout in the digital wilderness; use it sparingly, lest thou beest ignored." },
  { book: "Gamer", verse: "4:0", text: "The lag is the scapegoat of the defeated, and the 'broken controller' is the shield of the loser." },
  { book: "Selfcare", verse: "1:1", text: "A bath bomb and a face mask do not a therapy session make, but they are a start in the right direction." },
  { book: "Career", verse: "1:1", text: "Thou art 'Passionate about Excellence', yet thy true passion is the Friday at four o'clock." },
  { book: "Backups", verse: "1:1", text: "He who backeth up his drive is a man of foresight; he who does not is a man of many tears." },
  { book: "Home", verse: "1:1", text: "Home is where the Wi-Fi connecteth automatically, and the pants are optional." },
  { book: "Travel", verse: "1:1", text: "Thou hast gone to the mountains to 'find thyself', but thou hast found only that thou hatest the mosquitoes." },
  { book: "Minimalist", verse: "1:1", text: "He who owneth only one chair and a white wall calleth it 'Minimalism', but his mother calleth it 'Sadness'." },
  { book: "Office", verse: "1:1", text: "The printer is jammed, and the ink is low. Verily, the machine senseth thy fear and thy deadline." },
  { book: "Social", verse: "1:2", text: "He who 'Likes' his own post is like the man who high-fiveth himself in the mirror." },
  { book: "Diet", verse: "1:1", text: "The salad was eaten at noon, but the pizza was summoned at midnight. The balance is preserved." },
  { book: "Streaming", verse: "1:1", text: "Thou hast shared thy password with thy ex, and lo, they are still using thy 'Premium' profile three years later." },
  { book: "Inbox", verse: "1:1", text: "A 'CC' to thy boss is a declaration of war in the language of the office." },
  { book: "Weekend", verse: "1:1", text: "The Sunday Scaries are the shadow of the Monday morning; they haunt the evening of the rest." },
  { book: "Wisdom", verse: "100:1", text: "He who readeth all these verses hath spent too much time on the JSus app. Go forth and live, my child." }
];

function App() {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const getNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * QUOTES.length);
      setQuote(QUOTES[randomIndex]);
      setIsAnimating(false);
    }, 500);
  };

  const getVerseText = () => `"${quote.text}" - ${quote.book} ${quote.verse}`;

  const shareActions = {
    copy: () => {
      navigator.clipboard.writeText(getVerseText());
      alert("Scripture copied to clipboard!");
      setShowShareModal(false);
    },
    twitter: () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getVerseText())}`;
      window.open(url, '_blank');
      setShowShareModal(false);
    },
    whatsapp: () => {
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(getVerseText())}`;
      window.open(url, '_blank');
      setShowShareModal(false);
    },
    native: async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'JSus Wisdom',
            text: getVerseText(),
          });
          setShowShareModal(false);
        } catch (err) {
          console.error("Native share failed:", err);
        }
      }
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4">
      <header className="mb-12 text-center">
        <h1 className="text-[var(--color-bible-gold)] text-6xl font-serif font-bold tracking-widest mb-2 italic">
          JSus
        </h1>
        <p className="text-[var(--color-bible-parchment)]/60 font-sans uppercase tracking-[0.2em] text-sm">
          Modern Wisdom for the Digitally Lost
        </p>
      </header>

      <main className="w-full max-w-2xl">
        <div className="bg-[var(--color-bible-parchment)] text-[var(--color-bible-dark)] p-8 md:p-12 shadow-2xl rounded-sm bible-border relative overflow-hidden">
          {/* Subtle watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <BookOpen size={300} />
          </div>

          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
            <div className="mb-6 flex items-center gap-2 text-[var(--color-bible-red)] font-serif font-bold text-xl uppercase tracking-wider">
              <Sparkles size={20} />
              <span>{quote.book} {quote.verse}</span>
            </div>
            
            <p className="text-3xl md:text-4xl font-serif leading-relaxed italic mb-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[var(--color-bible-red)]">
              {quote.text}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-12 border-t border-[var(--color-bible-dark)]/10 pt-8">
            <button 
              onClick={getNewQuote}
              className="flex-1 bg-[var(--color-bible-dark)] text-[var(--color-bible-gold)] px-6 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-[var(--color-bible-red)] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw size={20} className={isAnimating ? 'animate-spin' : ''} />
              Seek Revelation
            </button>
            <button 
              onClick={() => setShowShareModal(true)}
              className="px-6 py-4 border-2 border-[var(--color-bible-dark)] hover:bg-[var(--color-bible-dark)] hover:text-[var(--color-bible-parchment)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 size={20} />
              Spread the Word
            </button>
          </div>
        </div>
      </main>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[var(--color-bible-parchment)] w-full max-w-sm border-4 double border-[var(--color-bible-gold)] p-8 relative animate-in zoom-in duration-200">
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-[var(--color-bible-dark)] hover:text-[var(--color-bible-red)] transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-serif font-bold text-center mb-8 text-[var(--color-bible-dark)] uppercase tracking-widest">
              Broadcast Wisdom
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={shareActions.twitter}
                className="flex flex-col items-center gap-2 p-4 border border-[var(--color-bible-dark)]/20 hover:bg-[var(--color-bible-dark)] hover:text-[var(--color-bible-gold)] transition-all cursor-pointer text-[var(--color-bible-dark)]"
              >
                <Twitter size={32} />
                <span className="text-xs uppercase font-bold">The X</span>
              </button>
              
              <button 
                onClick={shareActions.whatsapp}
                className="flex flex-col items-center gap-2 p-4 border border-[var(--color-bible-dark)]/20 hover:bg-[var(--color-bible-dark)] hover:text-[var(--color-bible-gold)] transition-all cursor-pointer text-[var(--color-bible-dark)]"
              >
                <MessageCircle size={32} />
                <span className="text-xs uppercase font-bold">The Message</span>
              </button>
              
              <button 
                onClick={shareActions.copy}
                className="flex flex-col items-center gap-2 p-4 border border-[var(--color-bible-dark)]/20 hover:bg-[var(--color-bible-dark)] hover:text-[var(--color-bible-gold)] transition-all cursor-pointer text-[var(--color-bible-dark)]"
              >
                <Copy size={32} />
                <span className="text-xs uppercase font-bold">The Scroll</span>
              </button>

              {navigator.share && (
                <button 
                  onClick={shareActions.native}
                  className="flex flex-col items-center gap-2 p-4 border border-[var(--color-bible-dark)]/20 hover:bg-[var(--color-bible-dark)] hover:text-[var(--color-bible-gold)] transition-all cursor-pointer text-[var(--color-bible-dark)]"
                >
                  <Share2 size={32} />
                  <span className="text-xs uppercase font-bold">The Oracle</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 text-[var(--color-bible-parchment)]/40 text-xs font-sans text-center">
        <p>© MMXXIV The First Church of JSus</p>
        <p className="mt-2 italic">Thy Wi-Fi be strong, thy pings be low.</p>
      </footer>
    </div>
  );
}

export default App;
