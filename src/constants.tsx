import { Shield, User, MessageSquare, Heart, BookOpen, AlertTriangle, CheckCircle2, UserPlus, Lock, Smartphone, Globe, Info, Zap, HelpCircle, Key, Eye, Share2, Fingerprint } from 'lucide-react';
import { Mission, HandbookEntry } from './types';

export const AVATARS = [
  { id: 'bot1', svg: (color: string) => `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.23858 2 7 4.23858 7 7V11C7 11.5523 7.44772 12 8 12H16C16.5523 12 17 11.5523 17 11V7C17 4.23858 14.7614 2 12 2Z" fill="${color}"/><path d="M6 14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14V17C18 19.2091 16.2091 21 14 21H10C7.79086 21 6 19.2091 6 17V14Z" fill="#94a3b8"/><rect x="9" y="15" width="6" height="4" rx="1" fill="#0f172a"/><circle cx="10" cy="7" r="1.5" fill="white"/><circle cx="14" cy="7" r="1.5" fill="white"/></svg>` },
  { id: 'bot2', svg: (color: string) => `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="14" height="14" rx="7" fill="${color}" /><rect x="4" y="11" width="16" height="8" rx="4" fill="#94a3b8" /><rect x="8" y="8" width="8" height="5" rx="2.5" fill="#1e293b" /><path d="M9 10.5H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M4 16L2 19M20 16L22 19" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" /></svg>` },
  { id: 'bot3', svg: (color: string) => `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="${color}"/><path d="M12 16C14.2091 16 16 14.2091 16 12H8C8 14.2091 9.79086 16 12 16Z" fill="#1e293b" /><path d="M9.5 10C10.3284 10 11 9.32843 11 8.5C11 7.67157 10.3284 7 9.5 7C8.67157 7 8 7.67157 8 8.5C8 9.32843 8.67157 10 9.5 10Z" fill="white" /><path d="M14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10Z" fill="white" /><path d="M18 5L20 3M6 5L4 3" stroke="${color}" stroke-width="2" stroke-linecap="round" /></svg>` },
  { id: 'bot4', svg: (color: string) => `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="16" height="12" rx="2" fill="${color}" /><path d="M8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8" fill="#94a3b8" /><circle cx="12" cy="14" r="3" fill="#1e293b" /><path d="M12 12.5V15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" /></svg>` }
];

export const COLORS = ['#ec4899', '#db2777', '#f472b6', '#fbbf24', '#3b82f6', '#10b981'];

export const MISSIONS: Mission[] = [
  {
    id: 'digital-consent',
    title: 'Mission 1: The Unwanted Tag',
    badgeName: 'Digital Consent',
    icon: <User className="w-12 h-12 text-pink-400" />,
    badgeIcon: <CheckCircle2 className="w-16 h-16 text-pink-400" />,
    description: 'Learn how to manage your online image and set digital boundaries.',
    knowledge: {
      title: 'Your Image, Your Choice',
      pages: [
        { text: "Hello, Shield Heroine! Let's talk about <strong>Digital Consent</strong>. You're scrolling online and see a friend has tagged you in a photo. You don't like it and wish they'd asked first. This feeling is valid!" },
        { text: "Digital consent means <strong>respecting people's choices about their online presence</strong>. This includes photos, personal information, and posts. Just like you ask for permission in real life, you should ask online too." },
        { text: "<strong>Key Idea:</strong> You have the right to control your own digital footprint. This means you can: <ul><li>Ask someone to take down a photo of you.</li><li>Untag yourself from posts.</li><li>Set your privacy settings so you must approve tags.</li></ul>" },
        { text: "It's also about <strong>giving consent</strong>. Before you post a picture of your friends, ask them: 'Is it okay if I post this?' It's a simple question that shows respect and protects your friendships." },
        { text: "Remember: Your online space is YOUR space. You have the power to set boundaries. Let's practice!" },
        { text: "<strong>Understanding Permission:</strong> Always get clear, explicit permission before sharing someone's content. A like or view doesn't equal consent to share." },
        { text: "<strong>The 'Screenshot' Rule:</strong> Before screenshotting someone's chat or story, ask first. What feels private should stay private." },
        { text: "<strong>Social Media Tagging:</strong> Most platforms let you review tags before they appear on your profile. Enable this setting to stay in control." },
        { text: "<strong>Revoking Consent:</strong> If you change your mind, it's okay to ask someone to remove content they posted about you. People should respect your wishes." },
        { text: "<strong>Supporting Others:</strong> If a friend is uncomfortable with content, support them in asking for it to be removed. Be an ally!" }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'The Unwanted Tag',
      intro: 'Your friend tags you in a group photo where you think you look awkward. What do you do?',
      questions: [
        {
          text: 'What is the best first step to take?',
          options: [
            { text: 'Post an angry comment on the photo.', correct: false },
            { text: 'Politely message your friend privately and ask them to remove the tag or photo.', correct: true },
            { text: 'Report the photo to the platform immediately.', correct: false },
            { text: 'Do nothing and just feel bad about it.', correct: false }
          ],
          feedback: 'Communicating privately and politely is almost always the best first step. It respects your friendship and clearly states your feelings.'
        },
        {
          text: 'Your friend says, "It\'s not a big deal, everyone looks fine!" What now?',
          options: [
            { text: 'Start a public fight in the comments.', correct: false },
            { text: 'Give up and let them keep it up.', correct: false },
            { text: 'Clearly explain *why* it makes you uncomfortable, e.g., "I appreciate that, but I just feel really self-conscious about it. It would mean a lot to me if you could take it down."', correct: true },
            { text: 'Block your friend immediately.', correct: false }
          ],
          feedback: 'Clearly and calmly explaining your feelings helps your friend understand your perspective. It\'s not about them being wrong, it\'s about you being uncomfortable.'
        },
        {
          text: 'What should you do if you see a photo of yourself that you never approved?',
          options: [
            { text: 'Just accept it and move on.', correct: false },
            { text: 'Report the post to the platform and request its removal.', correct: true },
            { text: 'Post an embarrassing photo of them in revenge.', correct: false },
            { text: 'Share it to show you don\'t care.', correct: false }
          ],
          feedback: 'Platforms have tools to help remove content you\'re featured in without consent. Use them!'
        },
        {
          text: 'Why is it important to ask permission before posting photos of others?',
          options: [
            { text: 'It\'s the law.', correct: false },
            { text: 'To respect their privacy, comfort, and digital rights.', correct: true },
            { text: 'So they can give you likes.', correct: false },
            { text: 'It\'s only important for strangers, not friends.', correct: false }
          ],
          feedback: 'Respecting others\' digital boundaries builds trust and prevents hurt. Permission shows you care about their feelings.'
        }
      ]
    }
  },
  {
    id: 'cyber-safety',
    title: 'Mission 2: The Suspicious Message',
    badgeName: 'Cyber Safety',
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    badgeIcon: <AlertTriangle className="w-16 h-16 text-blue-400" />,
    description: 'Identify cyber threats like phishing and learn to create strong defenses.',
    knowledge: {
      title: 'Your Digital Shield',
      pages: [
        { text: "Your digital shield protects your personal information. But there are tricks, like <strong>phishing</strong>, designed to get past it. Phishing is when someone pretends to be a person or company you trust to steal your info (like passwords or account numbers)." },
        { text: "<strong>Spotting a Phish:</strong> Be suspicious of messages that... <ul><li>Create urgency: 'Your account will be locked NOW!'</li><li>Have bad grammar or spelling.</li><li>Come from a strange email address.</li><li>Ask you to click a link or download an attachment you weren't expecting.</li></ul>" },
        { text: "Another part of your shield is a <strong>strong password</strong>. A weak password is like a lock made of paper. A strong one is like a steel vault!" },
        { text: "<strong>Pro Tip:</strong> Use a Password Manager to keep track of complex, unique passwords for every site. It's like having a master key for your vault." },
        { text: "<strong>Smishing:</strong> Phishing doesn't just happen via email - it can come through text messages too! Watch for suspicious SMS asking for personal info." },
        { text: "<strong>Social Engineering:</strong> Scammers often use psychological tricks. They might pretend to be from your school, a popular app, or even a friend in trouble." },
        { text: "<strong>Two-Factor Authentication (2FA):</strong> This adds an extra verification step. Even if someone gets your password, they can't access your account without a second code." },
        { text: "<strong>Secure Networks:</strong> Never enter passwords on public WiFi without a VPN. Public networks can be intercepted by hackers." },
        { text: "<strong>Suspicious Links:</strong> Hover over any link before clicking. The displayed text might say 'amazon.com' but the actual URL could be something else entirely." },
        { text: "<strong>Regular Security Checks:</strong> Review your login activity regularly. Many platforms show you where and when your account was accessed." }
      ]
    },
    challenge: {
      type: 'phishing',
      title: 'Spot the Phish!',
      intro: 'You receive this email in your inbox. Can you find all 3 suspicious things? Click on the warning flags!',
      email: {
        sender: 'Amazn-Support <service-support@amzn-security123.com>',
        subject: 'URGENT: Your Account has been Suspended!',
        body: ` <p>Dear Valued Customer,</p> <p>Our records show a suspicious login on your Amazn account. For your protection, we have temporarily suspended your account.</p> <p>To unlock it, you must <strong>verify your identity immediately</strong>. Failure to do so in 24 hours will result in permanent account deletion.</p> <p>Please click the button below to secure your account:</p> <br> <a href="#" class="phish-link bg-yellow-400 text-black font-bold py-2 px-4 rounded">Click Here to Verify Your Account</a> <br> <p>Thank you for your cooperation,<br>The Amazn Team</p> `
      },
      hotspots: [
        { id: 'sender', text: "<strong>Sender Address:</strong> Look closely! 'amzn-security123.com' is not the real Amazon website.", styles: 'top: 0; left: 100px; width: 450px; height: 25px;' },
        { id: 'urgency', text: "<strong>Urgent Threat:</strong> 'Failure to do so in 24 hours will result in permanent account deletion.' This is a classic scare tactic.", styles: 'top: 105px; left: 0; width: 100%; height: 50px;' },
        { id: 'link', text: "<strong>Suspicious Link:</strong> Always hover over links before clicking! A real Amazon link would go to 'amazon.com'.", styles: 'top: 195px; left: 0; width: 300px; height: 40px;' }
      ]
    }
  },
  {
    id: 'body-autonomy',
    title: 'Mission 3: The Uncomfortable Request',
    badgeName: 'Body Autonomy',
    icon: <Heart className="w-12 h-12 text-green-400" />,
    badgeIcon: <Shield className="w-16 h-16 text-green-400" />,
    description: 'Understand body autonomy and learn to say "no" to protect your boundaries.',
    knowledge: {
      title: 'Your Body, Your Rules',
      pages: [
        { text: "This is a very important mission, Heroine. We're going to talk about <strong>Body Autonomy</strong>. This is a simple but powerful idea: <strong>You are in charge of your own body.</strong>" },
        { text: "Your body belongs to YOU. You get to decide who can touch you, when, and how. This is true for everyone, in all situations—online and offline." },
        { text: "It's okay to say <strong>'NO'</strong> at any time, even to a friend or family member. You don't need a long explanation." },
        { text: "<strong>Remember:</strong> If someone makes you feel uncomfortable, it's not your fault. You have the right to leave the situation or stop the conversation immediately." },
        { text: "<strong>Online Body Autonomy:</strong> This extends to digital spaces. You don't have to share photos, videos, or any content that makes you uncomfortable—no matter who asks." },
        { text: "<strong>The Grooming Warning:</strong> Predators often try to normalize inappropriate requests by gradually pushing boundaries. Any request that makes you uncomfortable is a red flag." },
        { text: "<strong>Trust Your Gut:</strong> If something feels wrong, it probably is. Your instincts are there to protect you. Don't ignore that feeling." },
        { text: "<strong>Setting Digital Boundaries:</strong> You can: Block people, change your privacy settings, refuse video calls, and never feel guilty for protecting yourself." },
        { text: "<strong>Support Systems:</strong> If someone is pressuring you, tell a trusted adult. You don't have to handle this alone." },
        { text: "<strong>Healthy Relationships:</strong> Real friends and partners respect your boundaries. Anyone who doesn't isn't worth your time." }
      ]
    },
    challenge: {
      type: 'scenario',
      title: 'The Uncomfortable Request',
      intro: `You are chatting online with someone you know from school. They suddenly ask, "Can you send me a 'cute' picture of yourself? You know, something special just for me."`,
      questions: [
        {
          text: 'You feel a pit in your stomach. This makes you uncomfortable. What is the BEST response?',
          options: [
            { text: 'Send a photo because you don\'t want to make them mad.', correct: false },
            { text: '"No, I\'m not comfortable with that."', correct: true },
            { text: 'Change the subject and hope they forget.', correct: false }
          ],
          feedback: 'A clear and direct "No" is the strongest and safest answer. Your comfort is the priority.'
        },
        {
          text: 'They respond, "Come on, everyone does it. You\'re being boring." How do you respond?',
          options: [
            { text: 'Send a different photo to please them.', correct: false },
            { text: 'End the conversation and tell a trusted adult.', correct: true },
            { text: 'Apologize for being boring and send the photo.', correct: false },
            { text: 'Ignore them but keep the conversation going.', correct: false }
          ],
          feedback: 'Pressure to violate your boundaries is a major red flag. Ending the conversation and getting help is the safest choice.'
        },
        {
          text: 'What should you do if someone sends you an inappropriate photo?',
          options: [
            { text: 'Forward it to friends.', correct: false },
            { text: 'Screenshot it and share it for attention.', correct: false },
            { text: 'Tell a trusted adult and report the person.', correct: true },
            { text: 'Send one back to "balance" things.', correct: false }
          ],
          feedback: 'Never share inappropriate content sent to you. Report it and seek help from a trusted adult.'
        },
        {
          text: 'A friend shares a secret photo you sent them with others. What is the best action?',
          options: [
            { text: 'Send more secrets to prove you trust them.', correct: false },
            { text: 'Tell a trusted adult immediately and report to the platform.', correct: true },
            { text: 'Get revenge by sharing their secrets.', correct: false },
            { text: 'Forgive them since they might not have known better.', correct: false }
          ],
          feedback: 'Sharing private content without consent is a serious violation. Take action to protect yourself.'
        }
      ]
    }
  },
  {
    id: 'cyberbullying',
    title: 'Mission 4: The Mean Comment',
    badgeName: 'Upstander Power',
    icon: <MessageSquare className="w-12 h-12 text-orange-400" />,
    badgeIcon: <UserPlus className="w-16 h-16 text-orange-400" />,
    description: 'Learn to identify, respond to, and report cyberbullying.',
    knowledge: {
      title: 'Standing Up to Cyberbullying',
      pages: [
        { text: "Cyberbullying is bullying that happens online. It can include mean comments, spreading rumors, or leaving someone out on purpose." },
        { text: "There is a powerful three-step strategy to handle it: <strong>Block, Report, and Tell.</strong>" },
        { text: "<strong>Being an Upstander:</strong> If you see someone else being bullied, don't just watch. You can support them privately or report the behavior to the platform." },
        { text: "<strong>Documentation:</strong> Screenshot bullying messages before blocking. This serves as evidence if you need to report to authorities." },
        { text: "<strong>Cyberbullying Laws:</strong> Many places have laws against online harassment. What feels like 'just words' can have serious legal consequences." },
        { text: "<strong>Digital Footprint Evidence:</strong> Even deleted content can be recovered. Screenshots can help prove patterns of harassment." },
        { text: "<strong>Emotional Impact:</strong> Cyberbullying can cause anxiety, depression, and affect school performance. Don't dismiss it as 'just being online.'" },
        { text: "<strong>False Reports:</strong> Never make fake accounts to impersonate someone or post content to mock them. This is also bullying." },
        { text: "<strong>Targeted Groups:</strong> Anyone can be targeted, but some groups face higher rates. Stand up for those who might not have the strength to stand up for themselves." },
        { text: "<strong>Recovery:</strong> If you've been cyberbullied, remember it's not your fault. Seek support from friends, family, or professionals." }
      ]
    },
    challenge: {
      type: 'scenario',
      title: 'The Mean Comment',
      intro: 'You post a picture of your new haircut. Someone you barely know leaves a comment: "That looks so ugly lol"',
      questions: [
        {
          text: 'What is the BEST course of action to take on the app?',
          options: [
            { text: 'Reply with a long paragraph explaining why they are wrong.', correct: false },
            { text: 'Delete their comment, block the user, and report the comment for harassment.', correct: true },
            { text: 'Just delete their comment.', correct: false }
          ],
          feedback: 'Taking all three steps—Delete, Block, and Report—is the most effective way to handle the situation.'
        },
        {
          text: 'Your friend tells you they are being cyberbullied. What should you do?',
          options: [
            { text: 'Tell them to ignore it and move on.', correct: false },
            { text: 'Help them document the bullying and report it together.', correct: true },
            { text: 'Post something mean about the bully to "help."', correct: false },
            { text: 'Just listen but not take any action.', correct: false }
          ],
          feedback: 'Being an active supporter means taking action. Help your friend by documenting and reporting the abuse.'
        },
        {
          text: 'You see a group chat where people are making fun of a classmate. What do you do?',
          options: [
            { text: 'Join in so you don\'t become a target.', correct: false },
            { text: 'Leave the chat and tell a trusted adult.', correct: true },
            { text: 'Share the messages with more people.', correct: false },
            { text: 'Screenshot it to laugh at later.', correct: false }
          ],
          feedback: 'Being part of a bullying conversation makes you complicit. Leave and seek help to stop the bullying.'
        },
        {
          text: 'Someone creates a fake account impersonating you and posts mean things. What should you do?',
          options: [
            { text: 'Create a fake account to retaliate.', correct: false },
            { text: 'Report the fake account to the platform and tell a trusted adult.', correct: true },
            { text: 'Ignore it and hope it goes away.', correct: false },
            { text: 'Post about them on your real account.', correct: false }
          ],
          feedback: 'Impersonation accounts are against platform rules. Report them immediately and get adult support.'
        }
      ]
    }
  },
  {
    id: 'privacy-pro',
    title: 'Mission 5: Privacy Settings Pro',
    badgeName: 'Privacy Pro',
    icon: <Lock className="w-12 h-12 text-indigo-400" />,
    badgeIcon: <Lock className="w-16 h-16 text-indigo-400" />,
    description: 'Master your privacy settings across different social platforms.',
    knowledge: {
      title: 'Lock Down Your Profile',
      pages: [
        { text: "Privacy settings are your first line of defense. They control who can see your posts, who can message you, and what information is public." },
        { text: "<strong>Rule of Thumb:</strong> If you don't know them in real life, they shouldn't have access to your private life online." },
        { text: "<strong>Check Regularly:</strong> Platforms update their settings often. Make it a habit to review your privacy settings every few months." },
        { text: "<strong>Profile Visibility:</strong> Control who can see your full profile, your friends list, and your posts. Limit this to 'Friends Only.'" },
        { text: "<strong>Tagging Settings:</strong> Enable 'Review tags and links' so you can approve mentions before they appear on your profile." },
        { text: "<strong>Message Requests:</strong> Set who can message you directly. Strangers should not be able to contact you privately." },
        { text: "<strong>Location Services:</strong> Turn off location data for social media apps. Your real-time location shouldn't be public." },
        { text: "<strong>App Permissions:</strong> Regularly check what data apps can access. Many request more than they need." },
        { text: "<strong>Search Visibility:</strong> Control whether your profile appears in search results outside the platform." },
        { text: "<strong>Connected Apps:</strong> Review third-party apps connected to your social accounts and remove any you no longer use." }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Privacy Match',
      intro: 'Match the privacy setting to its correct function.',
      pairs: [
        { left: 'Private Account', right: 'Only approved followers can see posts' },
        { left: 'Two-Factor Auth', right: 'Extra code needed to log in' },
        { left: 'Location Sharing', right: 'Turn off to hide where you are' },
        { left: 'Message Requests', right: 'Filter messages from strangers' },
        { left: 'Review Tags', right: 'Approve posts mentioning you' },
        { left: 'Search Engine', right: 'Control if non-users can find you' },
        { left: 'Friend List', right: 'Hide who you follow from strangers' },
        { left: 'Activity Status', right: 'Hide when you were last active' }
      ]
    }
  },
  {
    id: 'digital-wellbeing',
    title: 'Mission 6: Screen Time Balance',
    badgeName: 'Wellbeing Warrior',
    icon: <Smartphone className="w-12 h-12 text-teal-400" />,
    badgeIcon: <Smartphone className="w-16 h-16 text-teal-400" />,
    description: 'Learn to balance your digital life with the real world.',
    knowledge: {
      title: 'Mindful Scrolling',
      pages: [
        { text: "Being a Shield Heroine also means taking care of your mental health. Too much screen time can lead to stress and sleep issues." },
        { text: "<strong>The 20-20-20 Rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds." },
        { text: "<strong>Digital Boundaries:</strong> Try setting 'no-phone' zones or times, like during meals or an hour before bed." },
        { text: "<strong>Sleep Science:</strong> Blue light from screens affects melatonin production. Devices before bed can disrupt your sleep cycle." },
        { text: "<strong>Screen Time Tools:</strong> Most phones have built-in screen time tracking. Use it to understand your habits." },
        { text: "<strong>Intentional Usage:</strong> Before opening an app, ask: 'Am I opening this on purpose, or out of habit?'" },
        { text: "<strong>Social Media Fasting:</strong> Try a 24-48 hour break and notice how you feel. You might find unexpected relief." },
        { text: "<strong>Mindful Scrolling:</strong> Pay attention to how social media makes you feel. If it leaves you feeling worse, it might be time to adjust." },
        { text: "<strong>Alternative Activities:</strong> Have go-to activities ready for when you feel the urge to scroll mindlessly." },
        { text: "<strong>Physical Health:</strong> Too much screen time can cause eye strain, headaches, and neck pain. Take regular breaks." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Wellbeing Tips',
      intro: 'Flip the cards to learn about digital wellbeing!',
      cards: [
        { front: 'Blue Light', back: 'Light from screens that can disrupt your sleep cycle.' },
        { front: 'FOMO', back: 'Fear Of Missing Out - the feeling that others are having more fun.' },
        { front: 'Digital Detox', back: 'Taking a planned break from all digital devices.' },
        { front: 'Screen Time Limit', back: 'A set amount of time to use devices each day.' },
        { front: 'Mindful Scrolling', back: 'Being aware of why and how you use social media.' },
        { front: 'Notification Fatigue', back: 'Being overwhelmed by constant alerts and messages.' },
        { front: 'Comparison Trap', back: 'Constantly comparing your life to others\' highlight reels.' },
        { front: 'Cyberchondria', back: 'Excessive health searching online causing anxiety.' },
        { front: 'Doomscrolling', back: 'Spending too much time consuming negative news.' },
        { front: 'Tech Neck', back: 'Neck pain from looking down at devices for long periods.' }
      ]
    }
  },
  {
    id: 'ai-awareness',
    title: 'Mission 7: AI & Deepfakes',
    badgeName: 'AI Guardian',
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    badgeIcon: <Zap className="w-16 h-16 text-yellow-400" />,
    description: 'Understand how AI can be used to create synthetic media and how to spot it.',
    knowledge: {
      title: 'The Rise of Synthetic Media',
      pages: [
        { text: "AI can now create incredibly realistic photos, videos, and voices. These are often called <strong>Deepfakes</strong>." },
        { text: "While AI is cool, it can be used to spread misinformation or create fake images of people without their consent." },
        { text: "<strong>Spotting a Deepfake:</strong> Look for glitches in movement, unnatural blinking, or strange shadows around the face." },
        { text: "<strong>Reverse Image Search:</strong> Use tools to check if a photo exists elsewhere or is being used with other contexts." },
        { text: "<strong>AI-Generated Text:</strong> AI can also write convincing fake articles. Always check the source and publication date." },
        { text: "<strong>Voice Cloning:</strong> AI can now replicate voices with just short audio samples. Be skeptical of urgent voice requests." },
        { text: "<strong>Consent Issues:</strong> Creating deepfakes of real people without permission is a violation of their rights and dignity." },
        { text: "<strong>Synthetic Media Detection:</strong> Look for blurry edges, inconsistent lighting, and unnatural skin textures." },
        { text: "<strong>Ethical AI Use:</strong> Just because you CAN create something with AI doesn't mean you SHOULD." },
        { text: "<strong>Reporting Deepfakes:</strong> If you find a deepfake of yourself or someone else, report it to the platform immediately." }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'AI Detective',
      intro: 'Test your knowledge on AI and synthetic media.',
      questions: [
        {
          text: 'What is a "Deepfake"?',
          options: [
            { text: 'A very long video.', correct: false },
            { text: 'Media created or altered using AI to look or sound like someone else.', correct: true },
            { text: 'A type of video game.', correct: false }
          ],
          feedback: 'Deepfakes use AI to swap faces or mimic voices, often very convincingly.'
        },
        {
          text: 'If you see a suspicious video of a celebrity saying something strange, what should you do?',
          options: [
            { text: 'Share it immediately.', correct: false },
            { text: 'Check other reliable news sources to see if it\'s being reported elsewhere.', correct: true },
            { text: 'Assume it\'s 100% real.', correct: false }
          ],
          feedback: 'Fact-checking is essential in the age of AI. If it seems too strange to be true, it might be a deepfake.'
        },
        {
          text: 'What is a common sign of a deepfake video?',
          options: [
            { text: 'High video quality and professional lighting.', correct: false },
            { text: 'Unnatural blinking, blurry edges, or inconsistent lighting.', correct: true },
            { text: 'The person mentions their real name.', correct: false }
          ],
          feedback: 'Look for subtle glitches that the human eye might miss at first glance.'
        },
        {
          text: 'Someone sends you a voice message claiming to be your parent needing money. What should you do?',
          options: [
            { text: 'Send money right away since it sounds like them.', correct: false },
            { text: 'Verify through a separate method (call their known number or ask a question only they would know).', correct: true },
            { text: 'Share the voice message with friends to get their opinion.', correct: false }
          ],
          feedback: 'Voice cloning technology is real. Always verify urgent requests through a different channel.'
        },
        {
          text: 'What is "synthetic media"?',
          options: [
            { text: 'Media made with traditional cameras only.', correct: false },
            { text: 'Any media (photo, video, audio) created or modified using AI.', correct: true },
            { text: 'News from official government sources.', correct: false }
          ],
          feedback: 'Synthetic media includes all AI-generated or AI-modified content.'
        }
      ]
    }
  },
  {
    id: 'reporting-resources',
    title: 'Mission 8: Reporting & Help',
    badgeName: 'Resource Expert',
    icon: <HelpCircle className="w-12 h-12 text-pink-400" />,
    badgeIcon: <HelpCircle className="w-16 h-16 text-pink-400" />,
    description: 'Know exactly where to go and who to talk to when things go wrong online.',
    knowledge: {
      title: 'Your Support Network',
      pages: [
        { text: "You don't have to face online challenges alone. There are many resources available to help you." },
        { text: "<strong>Trusted Adults:</strong> Parents, teachers, and counselors are there to support you." },
        { text: "<strong>Platform Tools:</strong> Every major social media site has a 'Help Center' and reporting tools for harassment or abuse." },
        { text: "<strong>Helplines:</strong> There are professional organizations and hotlines dedicated to online safety and mental health." },
        { text: "<strong>National Resources:</strong> Many countries have specific hotlines for cyberbullying, online predators, and mental health support." },
        { text: "<strong>Law Enforcement:</strong> For serious cases like threats, harassment, or exploitation, local police have cyber units." },
        { text: "<strong>School Resources:</strong> School counselors and IT staff can help with bullying and online issues that affect learning." },
        { text: "<strong>Nonprofit Organizations:</strong> Groups like Common Sense Media, CyberTipline, and others offer free resources and reporting." },
        { text: "<strong>Document Everything:</strong> Keep records of harassment, including screenshots, dates, and usernames for reporting." },
        { text: "<strong>Emotional Support:</strong> It's okay to feel overwhelmed. Reach out to mental health professionals if online experiences affect your wellbeing." }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Resource Match',
      intro: 'Match the situation to the best resource.',
      pairs: [
        { left: 'Harassment on Instagram', right: 'Use the "Report" button on the post' },
        { left: 'Feeling overwhelmed by social media', right: 'Talk to a school counselor' },
        { left: 'Someone stole your password', right: 'Contact the platform\'s Help Center' },
        { left: 'Seeing a friend being bullied', right: 'Tell a trusted adult' },
        { left: 'Online predator approach', right: 'Report to CyberTipline' },
        { left: 'Serious threat of harm', right: 'Contact local police' },
        { left: 'Need help with privacy settings', right: 'Visit platform\'s Help Center' },
        { left: 'Mental health crisis from online abuse', right: 'Call mental health helpline' }
      ]
    }
  },
  {
    id: 'reputation-management',
    title: 'Mission 9: Your Digital Brand',
    badgeName: 'Reputation Master',
    icon: <Eye className="w-12 h-12 text-purple-400" />,
    badgeIcon: <Eye className="w-16 h-16 text-purple-400" />,
    description: 'Manage your online reputation and understand how others see you.',
    knowledge: {
      title: 'Curating Your Presence',
      pages: [
        { text: "Your online reputation is like a digital first impression. Colleges, employers, and even new friends might look you up online. What will they find?" },
        { text: "<strong>Think Before You Post:</strong> Ask yourself: 'Would I be okay with my grandmother or a future boss seeing this?' If the answer is no, maybe don't post it." },
        { text: "<strong>Cleaning Up:</strong> It's never too late to audit your profiles. Delete old posts that don't represent who you are today and untag yourself from questionable content." },
        { text: "<strong>Google Yourself:</strong> Regularly search your name to see what information is publicly available about you." },
        { text: "<strong>Professional Presence:</strong> Consider creating a LinkedIn profile or professional social media presence for future opportunities." },
        { text: "<strong>Positive Content:</strong> Share achievements, volunteer work, and creative projects that showcase your strengths." },
        { text: "<strong>Privacy vs. Public:</strong> Balance your public presence with appropriate privacy for personal information." },
        { text: "<strong>Consistency:</strong> Ensure your online presence aligns with who you want to be perceived as." },
        { text: "<strong>Remove Search Results:</strong> Some platforms allow you to request removal of certain personal information from search results." },
        { text: "<strong>Long-term Thinking:</strong> Consider how your digital footprint might affect opportunities years from now." }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Reputation Check',
      intro: 'Decide if these actions help or hurt your online reputation.',
      questions: [
        {
          text: 'You are frustrated with a teacher and want to vent. What should you do?',
          options: [
            { text: 'Post a rant on your public story.', correct: false },
            { text: 'Talk to a trusted friend or parent offline.', correct: true },
            { text: 'Tweet about it without naming the teacher.', correct: false }
          ],
          feedback: 'Venting online can often come back to haunt you. It\'s better to handle frustrations privately and offline.'
        },
        {
          text: 'You want to show off your volunteer work. Is this good for your reputation?',
          options: [
            { text: 'Yes, it shows positive community involvement.', correct: true },
            { text: 'No, it looks like you are bragging.', correct: false }
          ],
          feedback: 'Sharing positive achievements and community work is a great way to build a strong digital brand.'
        },
        {
          text: 'What is the best way to handle an embarrassing old post you found?',
          options: [
            { text: 'Leave it - it was a different time.', correct: false },
            { text: 'Delete or archive it immediately.', correct: true },
            { text: 'Make a joke about it in the comments.', correct: false }
          ],
          feedback: 'Old posts may no longer represent who you are. Remove content that could be harmful to your current reputation.'
        },
        {
          text: 'A potential employer asks for your social media handles. What should you do?',
          options: [
            { text: 'Give them everything including private accounts.', correct: false },
            { text: 'Share your professional/public profiles only.', correct: true },
            { text: 'Refuse and end the conversation.', correct: false }
          ],
          feedback: 'You control what you share. Offer only your professional or public-facing profiles.'
        }
      ]
    }
  },
  {
    id: 'media-literacy',
    title: 'Mission 10: The Truth Seeker',
    badgeName: 'Media Expert',
    icon: <Share2 className="w-12 h-12 text-rose-400" />,
    badgeIcon: <Share2 className="w-16 h-16 text-rose-400" />,
    description: 'Develop critical thinking skills to navigate the sea of online information.',
    knowledge: {
      title: 'Critical Consumption',
      pages: [
        { text: "Not everything you see online is true. <strong>Media Literacy</strong> is the ability to analyze and evaluate the messages we receive." },
        { text: "<strong>Echo Chambers:</strong> Algorithms often show us things we already agree with. This can create a 'bubble' where we don't see other perspectives." },
        { text: "<strong>Fact-Checking:</strong> Before sharing a shocking headline, check the source. Is it a reputable news organization? Does the story appear on other sites?" },
        { text: "<strong>Lateral Reading:</strong> When evaluating a source, don't just read it - search for what other credible sources say about the same topic." },
        { text: "<strong>Source Evaluation:</strong> Ask: Who created this? When was it published? What is their purpose? Is this fact or opinion?" },
        { text: "<strong>Clickbait Recognition:</strong> Sensational headlines designed to get clicks often lack substance. Look beyond the hook." },
        { text: "<strong>Confirmation Bias:</strong> We tend to believe information that confirms what we already think. Be aware of this tendency." },
        { text: "<strong>Primary vs. Secondary:</strong> Primary sources are firsthand accounts; secondary sources report on others. Primary is usually more reliable." },
        { text: "<strong>Visual Manipulation:</strong> Images can be cropped, edited, or taken out of context. Reverse image search can help verify photos." },
        { text: "<strong>Digital Wellness:</strong> Too much news consumption can cause anxiety. Set healthy limits on your media intake." }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Fact vs. Fiction',
      intro: 'Match the term to its definition.',
      pairs: [
        { left: 'Clickbait', right: 'Sensational headlines designed to get clicks' },
        { left: 'Misinformation', right: 'False information spread regardless of intent' },
        { left: 'Confirmation Bias', right: 'Favoring info that confirms your beliefs' },
        { left: 'Source Verification', right: 'Checking the credibility of an author' },
        { left: 'Echo Chamber', right: 'Only seeing information that agrees with your views' },
        { left: 'Lateral Reading', right: 'Checking multiple sources for context' },
        { left: 'Disinformation', right: 'Intentional false information designed to deceive' },
        { left: 'Media Literacy', right: 'The ability to analyze and evaluate media messages' }
      ]
    }
  },
  {
    id: 'digital-footprint',
    title: 'Mission 11: The Forever Trail',
    badgeName: 'Footprint Guide',
    icon: <Fingerprint className="w-12 h-12 text-cyan-400" />,
    badgeIcon: <Fingerprint className="w-16 h-16 text-cyan-400" />,
    description: 'Understand the long-term impact of your digital footprint.',
    knowledge: {
      title: 'The Internet is Forever',
      pages: [
        { text: "Every click, like, and post contributes to your <strong>Digital Footprint</strong>. Even if you delete something, it might have been screenshotted or archived." },
        { text: "<strong>Data Collection:</strong> Websites and apps collect data about your behavior to show you targeted ads. You can limit this by managing your cookie settings." },
        { text: "<strong>Legacy:</strong> Your digital footprint is part of your legacy. Aim to leave a trail that is kind, respectful, and authentic to who you are." },
        { text: "<strong>Search Engine Results:</strong> What shows up when someone searches your name? Google yourself occasionally to monitor your footprint." },
        { text: "<strong>Data Brokers:</strong> These companies collect and sell your personal information. Opt out where possible." },
        { text: "<strong>Browser History:</strong> Your browsing history reveals a lot about you. Use private/incognito mode for sensitive searches." },
        { text: "<strong>Social Media Archives:</strong> Many platforms let you download all your data. Review what information they have on you." },
        { text: "<strong>Cache and Cookies:</strong> Regularly clear your browser cache and cookies to reduce tracking." },
        { text: "<strong>Geo-Tagging:</strong> Photos often contain location data. Remove this before sharing photos publicly." },
        { text: "<strong>Positive Footprint:</strong> Create content that showcases your talents, kindness, and achievements intentionally." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Footprint Facts',
      intro: 'Flip the cards to learn about your digital trail!',
      cards: [
        { front: 'Cookies', back: 'Small files stored on your device that track your site visits.' },
        { front: 'Archiving', back: 'Services that save snapshots of websites as they appeared in the past.' },
        { front: 'Privacy Policy', back: 'A document explaining how a company collects and uses your data.' },
        { front: 'IP Address', back: 'A unique number that identifies your device online.' },
        { front: 'Metadata', back: 'Hidden data in files that reveals when, where, and how content was created.' },
        { front: 'Data Breach', back: 'When hackers access and steal personal information from a company.' },
        { front: 'Terms of Service', back: 'The legal agreement between you and a service provider.' },
        { front: 'Right to be Forgotten', back: 'Legal right to request deletion of your personal data.' },
        { front: 'VPN', back: 'Virtual Private Network - masks your IP address for privacy.' },
        { front: 'Data Minimization', back: 'Sharing only the minimum information necessary online.' }
      ]
    }
  },
  {
    id: 'online-friendships',
    title: 'Mission 12: Building Safe Friendships Online',
    badgeName: 'Friendship Guardian',
    icon: <UserPlus className="w-12 h-12 text-emerald-400" />,
    badgeIcon: <UserPlus className="w-16 h-16 text-emerald-400" />,
    description: 'Learn how to build healthy relationships online and recognize red flags.',
    knowledge: {
      title: 'Digital Relationships',
      pages: [
        { text: "Online friendships can be just as meaningful as in-person ones, but they require extra caution. <strong>Building trust takes time</strong> and should happen gradually." },
        { text: "<strong>Red Flags in Online Friendships:</strong><ul><li>Asking for personal information too soon.</li><li>Wanting to move conversations to private messaging immediately.</li><li>Being inconsistent with their story.</li><li>Pressuring you to do things you're uncomfortable with.</li></ul>" },
        { text: "<strong>Healthy Online Friendships:</strong> Share interests, support each other, and eventually meet in person if it feels right. Always involve trusted adults in your decision-making process." },
        { text: "<strong>Grooming Warning Signs:</strong> Adults who befriend young people online to gain trust are committing a crime. Watch for gifts, secrets, and isolation tactics." },
        { text: "<strong>Catfishing:</strong> Someone pretending to be someone else online. Always verify identities through video calls or real-life meetings." },
        { text: "<strong>Sharing Personal Info:</strong> Never share your full name, address, school, or phone number with people you haven't met in person." },
        { text: "<strong>Safe Meeting:</strong> If you decide to meet someone from online, always: meet in a public place, bring a trusted adult, and tell someone where you're going." },
        { text: "<strong>Online-to-Offline:</strong> The transition from online to real-life friendships should be gradual and always involve safety measures." },
        { text: "<strong>Trust Verification:</strong> Video call to verify someone is who they say they are. A real person will be happy to prove their identity." },
        { text: "<strong>Support Network:</strong> Always keep your trusted adults informed about your online friendships. They can help assess if the relationship is healthy." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Friendship Safety Cards',
      intro: 'Flip the cards to learn about safe online friendships!',
      cards: [
        { front: 'Trust Building', back: 'Take time to get to know someone before sharing personal details.' },
        { front: 'Red Flag', back: 'Someone who asks for money or gifts online.' },
        { front: 'Safe Sharing', back: 'Share photos and stories that you\'d be comfortable showing your parents.' },
        { front: 'Meeting IRL', back: 'Always bring a trusted adult when meeting someone from online for the first time.' },
        { front: 'Private Info', back: 'Never share your address, school name, or phone number with strangers online.' },
        { front: 'Catfishing', back: 'Someone pretending to be someone else online.' },
        { front: 'Grooming', back: 'An adult trying to build trust to exploit a young person.' },
        { front: 'Verification', back: 'Video calls help confirm someone\'s real identity.' },
        { front: 'Safe Space', back: 'Tell a trusted adult about online friendships you care about.' },
        { front: 'Boundaries', back: 'Real friends respect your limits and never pressure you.' }
      ]
    }
  },
  {
    id: 'password-security',
    title: 'Mission 13: Password Power',
    badgeName: 'Password Master',
    icon: <Key className="w-12 h-12 text-amber-400" />,
    badgeIcon: <Key className="w-16 h-16 text-amber-400" />,
    description: 'Master the art of creating and managing strong, unique passwords.',
    knowledge: {
      title: 'Fortress of Passwords',
      pages: [
        { text: "Your password is the key to your digital kingdom. A weak password is like leaving your front door unlocked. <strong>Strong passwords are long, complex, and unique.</strong>" },
        { text: "<strong>Password Best Practices:</strong><ul><li>Use at least 12 characters.</li><li>Mix uppercase, lowercase, numbers, and symbols.</li><li>Never reuse passwords across sites.</li><li>Use a password manager to keep track.</li></ul>" },
        { text: "<strong>Two-Factor Authentication (2FA):</strong> This adds an extra layer of security. Even if someone guesses your password, they still need access to your phone or email." },
        { text: "<strong>Passphrases:</strong> Instead of complex random characters, use a memorable phrase like 'PurpleTigerJumpsHigh2024!'" },
        { text: "<strong>Password Managers:</strong> These tools generate and store unique passwords securely. You only need to remember one master password." },
        { text: "<strong>Common Mistakes:</strong> Avoid using personal info (birthdays, pet names), common words, and number sequences like '123456'." },
        { text: "<strong>Recovery Options:</strong> Set up backup email and phone recovery options, but make sure those are secure too." },
        { text: "<strong>Breach Monitoring:</strong> Use services like HaveIBeenPwned.com to check if your email has been in a data breach." },
        { text: "<strong>Password Sharing:</strong> Never share passwords with friends, even close ones. Relationships can change, and your accounts should stay secure." },
        { text: "<strong>Regular Updates:</strong> Change important passwords periodically, especially after any suspected breach." }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Password Quiz',
      intro: 'Test your password knowledge!',
      questions: [
        {
          text: 'Which of these is the strongest password?',
          options: [
            { text: 'password123', correct: false },
            { text: 'MyDogSpot2024!', correct: true },
            { text: 'qwerty', correct: false },
            { text: 'letmein', correct: false }
          ],
          feedback: 'A strong password is long, uses mixed characters, and isn\'t a common word or pattern.'
        },
        {
          text: 'What should you do if a website asks for your password from another site?',
          options: [
            { text: 'Give it to them - they probably need it for verification.', correct: false },
            { text: 'Never share passwords between sites. Create a new, unique password.', correct: true },
            { text: 'Use your email password - that\'s safe.', correct: false }
          ],
          feedback: 'Legitimate websites will never ask for passwords from other services. This is often a phishing attempt.'
        },
        {
          text: 'What is the purpose of Two-Factor Authentication?',
          options: [
            { text: 'To make logging in faster.', correct: false },
            { text: 'To add an extra security layer beyond just a password.', correct: true },
            { text: 'To remember all your passwords automatically.', correct: false }
          ],
          feedback: '2FA requires something you know (password) and something you have (phone/code) to log in.'
        },
        {
          text: 'How should you handle a password for a site that was just breached?',
          options: [
            { text: 'Wait and see if anything happens.', correct: false },
            { text: 'Change that password immediately and any other accounts using the same password.', correct: true },
            { text: 'Post about it on social media.', correct: false }
          ],
          feedback: 'If a site is breached, change your password immediately. Never reuse passwords across sites.'
        },
        {
          text: 'What is a passphrase?',
          options: [
            { text: 'A very short password.', correct: false },
            { text: 'A sentence or phrase used as a password, like "CoffeeIsMyFuel!"', correct: true },
            { text: 'The password for your email account.', correct: false }
          ],
          feedback: 'Passphrases are longer and easier to remember than random character passwords.'
        }
      ]
    }
  },
  {
    id: 'social-media-pressure',
    title: 'Mission 14: Social Media Pressure',
    badgeName: 'Authenticity Champion',
    icon: <Globe className="w-12 h-12 text-violet-400" />,
    badgeIcon: <Globe className="w-16 h-16 text-violet-400" />,
    description: 'Navigate the pressures of social media and maintain your authentic self.',
    knowledge: {
      title: 'Beyond the Filter',
      pages: [
        { text: "Social media often shows the <strong>highlight reel</strong>, not the full picture. Remember that everyone's life has ups and downs, even if their feed looks perfect." },
        { text: "<strong>Comparison Trap:</strong> Constantly comparing yourself to others online can lead to feelings of inadequacy. Remember: social media is curated content, not reality." },
        { text: "<strong>Authentic Posting:</strong> Share your real experiences, both good and bad. Your followers will appreciate your honesty and it might help someone else who feels the same way." },
        { text: "<strong>Filter Awareness:</strong> Many photos are edited with filters, Facetune, or AI. What you see is often not reality." },
        { text: "<strong>Body Image Impact:</strong> Studies show social media use is linked to body image concerns, especially with filtered content." },
        { text: "<strong>Curate Your Feed:</strong> Unfollow accounts that make you feel bad. Follow accounts that inspire and uplift you." },
        { text: "<strong>Validation Seeking:</strong> Relying on likes and comments for self-worth can be harmful. Your worth isn't measured in engagement." },
        { text: "<strong>Real vs. Reel:</strong> The 'perfect' life people show online often involves filters, staged moments, and omitted struggles." },
        { text: "<strong>Mental Health Break:</strong> Regular breaks from social media can help reset your perspective and reduce anxiety." },
        { text: "<strong>Authentic Connections:</strong> Real engagement with a few close friends is more valuable than thousands of followers." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Social Media Wisdom',
      intro: 'Learn to navigate social media pressures!',
      cards: [
        { front: 'Highlight Reel', back: 'The perfect moments people choose to share, not their everyday reality.' },
        { front: 'Comparison', back: 'Measuring yourself against others\' curated content can harm self-esteem.' },
        { front: 'Authenticity', back: 'Being genuine in your posts and interactions online.' },
        { front: 'Unfollow', back: 'Removing accounts that make you feel bad about yourself.' },
        { front: 'Digital Detox', back: 'Taking breaks from social media to reconnect with yourself.' },
        { front: 'Filter Fatigue', back: 'Being tired of seeing heavily edited content.' },
        { front: 'Engagement Bait', back: 'Posts asking you to like, share, or comment to "win."' },
        { front: 'Influencer Culture', back: 'The trend of people building careers from social media presence.' },
        { front: 'Validation Seeking', back: 'Relying on likes for self-worth.' },
        { front: 'Content Curation', back: 'Actively choosing what you see and share online.' }
      ]
    }
  },
  {
    id: 'data-privacy',
    title: 'Mission 15: Data Privacy Matters',
    badgeName: 'Privacy Protector',
    icon: <Lock className="w-12 h-12 text-slate-400" />,
    badgeIcon: <Lock className="w-16 h-16 text-slate-400" />,
    description: 'Understand how your data is collected and how to protect your privacy.',
    knowledge: {
      title: 'Your Data, Your Control',
      pages: [
        { text: "Every app and website you use collects data about you. This data can include what you search for, what you click on, and even your location. <strong>You have rights over your data.</strong>" },
        { text: "<strong>Privacy Settings:</strong> Regularly review and update your privacy settings on all platforms. Limit who can see your posts and what information is shared." },
        { text: "<strong>Data Rights:</strong> In many places, you have the right to know what data companies have about you and to request its deletion. Look for 'Privacy Policy' and 'Terms of Service' links." },
        { text: "<strong>Data Collection Types:</strong> Companies collect: browsing history, purchase data, location history, social connections, and device information." },
        { text: "<strong>Cookies:</strong> These small files track your online activity. You can accept, reject, or limit cookies in browser settings." },
        { text: "<strong>Data Brokers:</strong> These companies aggregate and sell your personal information. Research how to opt out in your country." },
        { text: "<strong>Privacy Laws:</strong> Laws like GDPR (Europe), CCPA (California), and others give you specific rights over your data." },
        { text: "<strong>App Permissions:</strong> Review what permissions apps request. A flashlight app doesn't need access to your contacts." },
        { text: "<strong>Data Minimization:</strong> Only provide information that is truly necessary. Question why information is being collected." },
        { text: "<strong>Regular Audits:</strong> Periodically review connected apps, data sharing settings, and your digital footprint." }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Privacy Terms Match',
      intro: 'Match the privacy term to its meaning.',
      pairs: [
        { left: 'Cookies', right: 'Small files that track your browsing behavior' },
        { left: 'Data Broker', right: 'Companies that collect and sell personal information' },
        { left: 'GDPR', right: 'European law protecting personal data rights' },
        { left: 'Incognito Mode', right: 'Browser mode that doesn\'t save browsing history' },
        { left: 'VPN', right: 'Service that hides your IP address and encrypts traffic' },
        { left: 'Opt-Out', right: 'Request to stop a company from using your data' },
        { left: 'Data Breach', right: 'Unauthorized access to personal information' },
        { left: 'Privacy Policy', right: 'Document explaining how data is collected and used' }
      ]
    }
  },
  {
    id: 'gaming-safety',
    title: 'Mission 16: Safe Gaming',
    badgeName: 'Gaming Guardian',
    icon: <Smartphone className="w-12 h-12 text-red-400" />,
    badgeIcon: <Smartphone className="w-16 h-16 text-red-400" />,
    description: 'Stay safe while gaming online and maintain healthy gaming habits.',
    knowledge: {
      title: 'Level Up Your Safety',
      pages: [
        { text: "Online gaming is fun, but it comes with risks. <strong>Gaming safely</strong> means protecting your personal information and maintaining healthy boundaries." },
        { text: "<strong>Gaming Safety Tips:</strong><ul><li>Never share personal information with other players.</li><li>Use in-game voice chat cautiously.</li><li>Report toxic behavior to game moderators.</li><li>Set time limits to avoid gaming addiction.</li></ul>" },
        { text: "<strong>Gaming Addiction:</strong> If gaming starts interfering with school, relationships, or health, it's time to seek help. Many games have built-in tools to monitor and limit playtime." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Gaming Safety Cards',
      intro: 'Master safe gaming practices!',
      cards: [
        { front: 'Voice Chat', back: 'Be cautious about who you talk to - use mute options for strangers.' },
        { front: 'Personal Info', back: 'Never share real name, address, school, or age in games.' },
        { front: 'Toxic Players', back: 'Report and block players who harass or bully others.' },
        { front: 'Time Limits', back: 'Set daily limits to maintain balance with other activities.' },
        { front: 'In-Game Purchases', back: 'Be aware of microtransactions and set spending limits.' }
      ]
    }
  },
  {
    id: 'mental-health-online',
    title: 'Mission 17: Mental Health Online',
    badgeName: 'Mind Guardian',
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    badgeIcon: <Heart className="w-16 h-16 text-pink-500" />,
    description: 'Recognize when online activity affects your mental health and know how to seek help.',
    knowledge: {
      title: 'Digital Mental Wellness',
      pages: [
        { text: "The online world can be overwhelming. <strong>Mental health online</strong> means being aware of how digital interactions affect your emotional wellbeing." },
        { text: "<strong>Signs of Digital Stress:</strong><ul><li>Feeling anxious when away from your phone.</li><li>Comparing yourself to others constantly.</li><li>Losing sleep due to late-night scrolling.</li><li>Feeling down after seeing certain content.</li></ul>" },
        { text: "<strong>Healthy Digital Habits:</strong> Take regular breaks, curate your feed to include positive content, and talk to trusted adults about your feelings." }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Mental Health Check',
      intro: 'Learn to recognize and address online mental health concerns.',
      questions: [
        {
          text: 'You feel anxious when you can\'t check your phone. What should you do?',
          options: [
            { text: 'Keep your phone closer at all times.', correct: false },
            { text: 'Try a digital detox - leave your phone in another room for a few hours.', correct: true },
            { text: 'Check your phone even more frequently to get used to it.', correct: false }
          ],
          feedback: 'Taking breaks from your phone can help reduce anxiety and help you regain control.'
        },
        {
          text: 'Seeing perfect posts from friends makes you feel inadequate. What\'s a healthy response?',
          options: [
            { text: 'Stop following all your friends.', correct: false },
            { text: 'Remember that social media shows highlights, not reality, and talk to a friend about your feelings.', correct: true },
            { text: 'Post your own perfect photos to compete.', correct: false }
          ],
          feedback: 'Social media comparison is common. Talking about your feelings with trusted people can help.'
        }
      ]
    }
  },
  {
    id: 'online-shopping-safety',
    title: 'Mission 18: Smart Shopping Online',
    badgeName: 'Shopping Shield',
    icon: <Info className="w-12 h-12 text-green-500" />,
    badgeIcon: <Info className="w-16 h-16 text-green-500" />,
    description: 'Learn to shop safely online and avoid common scams.',
    knowledge: {
      title: 'Consumer Protection Online',
      pages: [
        { text: "Online shopping is convenient, but it requires vigilance. <strong>Smart shopping</strong> means protecting your payment information and being a savvy consumer." },
        { text: "<strong>Safe Shopping Practices:</strong><ul><li>Use credit cards instead of debit cards for purchases.</li><li>Look for 'https://' and the lock icon in the address bar.</li><li>Read reviews from multiple sources.</li><li>Be suspicious of deals that seem too good to be true.</li></ul>" },
        { text: "<strong>Return Policies:</strong> Always check return policies before purchasing. Legitimate sellers stand behind their products." }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Shopping Safety Match',
      intro: 'Match the shopping scenario to the safe action.',
      pairs: [
        { left: 'Too-good-to-be-true deal', right: 'Research the seller and check for reviews' },
        { left: 'Website asks for more payment info', right: 'Close the page and shop elsewhere' },
        { left: 'Unfamiliar payment method requested', right: 'Use PayPal or credit card instead' },
        { left: 'No return policy listed', right: 'Find another seller with clear policies' },
        { left: 'Seller wants payment via wire transfer', right: 'This is a red flag - avoid this seller' }
      ]
    }
  },
  {
    id: 'digital-citizenship',
    title: 'Mission 19: Digital Citizenship',
    badgeName: 'Digital Citizen',
    icon: <Globe className="w-12 h-12 text-blue-500" />,
    badgeIcon: <Globe className="w-16 h-16 text-blue-500" />,
    description: 'Become a responsible digital citizen who contributes positively to online communities.',
    knowledge: {
      title: 'Responsible Digital Living',
      pages: [
        { text: "<strong>Digital Citizenship</strong> is about being a good member of online communities. It means treating others with respect, protecting your own rights, and contributing positively." },
        { text: "<strong>Core Principles:</strong><ul><li><strong>Respect:</strong> Treat others online as you would in person.</li><li><strong>Responsibility:</strong> Think before you post or share.</li><li><strong>Protection:</strong> Safeguard your own and others' privacy.</li><li><strong>Education:</strong> Keep learning about digital safety.</li></ul>" },
        { text: "<strong>Positive Contribution:</strong> Use your online voice to support causes you care about, help others, and spread kindness. Small acts of digital kindness can make a big difference." }
      ]
    },
    challenge: {
      type: 'flashcard',
      title: 'Citizenship Principles',
      intro: 'Learn the principles of good digital citizenship!',
      cards: [
        { front: 'Digital Respect', back: 'Treating others online with the same courtesy as offline.' },
        { front: 'Online Responsibility', back: 'Being accountable for your digital actions and their consequences.' },
        { front: 'Privacy Protection', back: 'Respecting others\' privacy and protecting your own.' },
        { front: 'Information Ethics', back: 'Sharing accurate information and fact-checking before spreading.' },
        { front: 'Continuous Learning', back: 'Staying informed about new digital safety practices.' }
      ]
    }
  },
  {
    id: 'future-tech-safety',
    title: 'Mission 20: Future Tech & Emerging Threats',
    badgeName: 'Tech Visionary',
    icon: <Zap className="w-12 h-12 text-purple-500" />,
    badgeIcon: <Zap className="w-16 h-16 text-purple-500" />,
    description: 'Prepare for emerging technologies and stay ahead of new digital threats.',
    knowledge: {
      title: 'Tomorrow\'s Digital World',
      pages: [
        { text: "Technology evolves rapidly, bringing new opportunities and challenges. <strong>Future-ready safety</strong> means staying informed about emerging trends and threats." },
        { text: "<strong>Emerging Technologies:</strong><ul><li><strong>AI & Machine Learning:</strong> Can create deepfakes and personalized scams.</li><li><strong>IoT Devices:</strong> Smart home devices that can be hacked.</li><li><strong>Virtual Reality:</strong> Immersive experiences that blur real and digital worlds.</li><li><strong>Blockchain & Crypto:</strong> New ways to store value and conduct transactions.</li></ul>" },
        { text: "<strong>Staying Safe:</strong> Keep your software updated, use strong unique passwords, be skeptical of new technologies, and continue learning about digital safety." }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Future Tech Quiz',
      intro: 'Test your knowledge of emerging digital threats and solutions.',
      questions: [
        {
          text: 'What is a potential risk of smart home devices?',
          options: [
            { text: 'They might be hacked to spy on you or control your home.', correct: true },
            { text: 'They make your home too comfortable.', correct: false },
            { text: 'They use too much electricity.', correct: false }
          ],
          feedback: 'IoT devices can be vulnerable to hacking if not properly secured with strong passwords and firmware updates.'
        },
        {
          text: 'Why is it important to stay informed about new technologies?',
          options: [
            { text: 'To buy the latest gadgets first.', correct: false },
            { text: 'To understand new potential risks and how to protect yourself.', correct: true },
            { text: 'To impress your friends with tech knowledge.', correct: false }
          ],
          feedback: 'Understanding emerging technologies helps you anticipate new threats and adopt safe practices early.'
        }
      ]
    }
  }
];

export const HANDBOOK_DATA: Record<string, HandbookEntry> = {
  'digital-consent': {
    title: 'Digital Consent',
    icon: <User className="w-8 h-8" />,
    color: 'text-pink-400',
    content: [
      "<strong>Digital Consent is...</strong> respecting people's choices about their online presence.",
      "<strong>Your Digital Footprint:</strong> Everything you post creates a 'footprint'. You have the right to control it.",
      "<strong>Key Rights:</strong><ul><li>Control who tags you.</li><li>Ask for photos to be taken down.</li><li>Decide what information you share.</li></ul>"
    ]
  },
  'cyber-safety': {
    title: 'Cyber Safety',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-blue-400',
    content: [
      "<strong>Cyber Safety is...</strong> actively protecting your information.",
      "<strong>Phishing Flags:</strong><ul><li>Generic greetings.</li><li>Urgent threats.</li><li>Weird senders.</li></ul>"
    ]
  },
  'body-autonomy': {
    title: 'Body Autonomy',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-green-400',
    content: [
      "<strong>Body Autonomy is...</strong> the right to be the sole decision-maker for your own body.",
      "<strong>The Power of 'No':</strong> 'No' is a complete sentence."
    ]
  },
  'cyberbullying': {
    title: 'Cyberbullying',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'text-orange-400',
    content: [
      "<strong>Cyberbullying is...</strong> repeated, unwanted, aggressive behavior online.",
      "<strong>Defense:</strong> Block, Report, Tell."
    ]
  },
  'privacy-pro': {
    title: 'Privacy Settings',
    icon: <Lock className="w-8 h-8" />,
    color: 'text-indigo-400',
    content: [
      "<strong>Privacy is Power:</strong> Use settings to control your visibility.",
      "<strong>2FA:</strong> Always enable Two-Factor Authentication."
    ]
  },
  'digital-wellbeing': {
    title: 'Digital Wellbeing',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'text-teal-400',
    content: [
      "<strong>Balance:</strong> Your digital life should complement your real life, not replace it.",
      "<strong>Sleep:</strong> Avoid screens at least 1 hour before bed."
    ]
  },
  'ai-awareness': {
    title: 'AI & Deepfakes',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-400',
    content: [
      "<strong>Deepfakes:</strong> Media created using AI to mimic real people.",
      "<strong>Verification:</strong> Always fact-check suspicious or sensational content.",
      "<strong>Consent:</strong> Creating deepfakes of others without permission is a violation of consent."
    ]
  },
  'reporting-resources': {
    title: 'Reporting & Help',
    icon: <HelpCircle className="w-8 h-8" />,
    color: 'text-pink-400',
    content: [
      "<strong>Don't Stay Silent:</strong> If something feels wrong, it probably is.",
      "<strong>Action Steps:</strong> Block, Report, Tell.",
      "<strong>Trusted Adults:</strong> They are your best allies in staying safe."
    ]
  },
  'reputation-management': {
    title: 'Digital Reputation',
    icon: <Eye className="w-8 h-8" />,
    color: 'text-purple-400',
    content: [
      "<strong>Your Digital Brand:</strong> How you present yourself online matters for your future.",
      "<strong>Audit Your Profiles:</strong> Regularly check what others can see about you.",
      "<strong>Think Before Posting:</strong> Is this something you'd be proud of in 5 years?"
    ]
  },
  'media-literacy': {
    title: 'Media Literacy',
    icon: <Share2 className="w-8 h-8" />,
    color: 'text-rose-400',
    content: [
      "<strong>Critical Thinking:</strong> Question the source and intent of online content.",
      "<strong>Verify Before Sharing:</strong> Don't spread misinformation by accident.",
      "<strong>Algorithm Awareness:</strong> Understand how your feed is being curated."
    ]
  },
  'digital-footprint': {
    title: 'Digital Footprint',
    icon: <Fingerprint className="w-8 h-8" />,
    color: 'text-cyan-400',
    content: [
      "<strong>The Internet is Forever:</strong> Deleting doesn't always mean it's gone.",
      "<strong>Data Privacy:</strong> Be mindful of what data you give away to apps and sites.",
      "<strong>Your Legacy:</strong> Build a footprint that reflects your true values."
    ]
  },
  'online-friendships': {
    title: 'Online Friendships',
    icon: <UserPlus className="w-8 h-8" />,
    color: 'text-emerald-400',
    content: [
      "<strong>Trust Takes Time:</strong> Build relationships gradually and safely online.",
      "<strong>Red Flags:</strong> Watch for pressure, inconsistency, or requests for personal information.",
      "<strong>Healthy Connections:</strong> Share interests, support each other, and involve trusted adults."
    ]
  },
  'password-security': {
    title: 'Password Security',
    icon: <Key className="w-8 h-8" />,
    color: 'text-amber-400',
    content: [
      "<strong>Strong Passwords:</strong> Long, complex, and unique for each account.",
      "<strong>Password Managers:</strong> Tools to securely store and generate strong passwords.",
      "<strong>Two-Factor Authentication:</strong> Extra security layer beyond passwords."
    ]
  },
  'social-media-pressure': {
    title: 'Social Media Pressure',
    icon: <Globe className="w-8 h-8" />,
    color: 'text-violet-400',
    content: [
      "<strong>Highlight Reel:</strong> Social media shows curated perfection, not reality.",
      "<strong>Comparison Trap:</strong> Avoid measuring yourself against others' feeds.",
      "<strong>Authenticity:</strong> Share your real self and curate feeds that make you feel good."
    ]
  },
  'data-privacy': {
    title: 'Data Privacy',
    icon: <Lock className="w-8 h-8" />,
    color: 'text-slate-400',
    content: [
      "<strong>Your Data Rights:</strong> You control what information is collected about you.",
      "<strong>Privacy Settings:</strong> Regularly review and update your online privacy controls.",
      "<strong>Data Laws:</strong> Understand regulations like GDPR that protect your information."
    ]
  },
  'gaming-safety': {
    title: 'Gaming Safety',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'text-red-400',
    content: [
      "<strong>Safe Gaming:</strong> Protect personal info and maintain healthy gaming habits.",
      "<strong>Voice Chat Caution:</strong> Be careful about who you communicate with in games.",
      "<strong>Time Management:</strong> Set limits to prevent gaming from interfering with life."
    ]
  },
  'mental-health-online': {
    title: 'Online Mental Health',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-pink-500',
    content: [
      "<strong>Digital Stress:</strong> Recognize when online activity affects your wellbeing.",
      "<strong>Healthy Habits:</strong> Take breaks, curate positive content, seek help when needed.",
      "<strong>Support Networks:</strong> Talk to trusted adults about online experiences."
    ]
  },
  'online-shopping-safety': {
    title: 'Online Shopping Safety',
    icon: <Info className="w-8 h-8" />,
    color: 'text-green-500',
    content: [
      "<strong>Secure Shopping:</strong> Use HTTPS, credit cards, and verified sellers.",
      "<strong>Scam Awareness:</strong> Recognize too-good-to-be-true deals and suspicious requests.",
      "<strong>Consumer Rights:</strong> Know return policies and your rights as a shopper."
    ]
  },
  'digital-citizenship': {
    title: 'Digital Citizenship',
    icon: <Globe className="w-8 h-8" />,
    color: 'text-blue-500',
    content: [
      "<strong>Respect & Responsibility:</strong> Be a positive force in online communities.",
      "<strong>Privacy & Ethics:</strong> Protect yourself and others while using digital tools.",
      "<strong>Continuous Learning:</strong> Stay informed about evolving digital safety practices."
    ]
  },
  'future-tech-safety': {
    title: 'Future Tech Safety',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-purple-500',
    content: [
      "<strong>Emerging Threats:</strong> Stay aware of new technologies and their risks.",
      "<strong>AI Awareness:</strong> Understand deepfakes, personalized scams, and AI ethics.",
      "<strong>Adaptability:</strong> Continuously learn to stay safe in an evolving digital landscape."
    ]
  }
};
