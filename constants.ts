
import { Module, Cycle, PerspectiveType } from './types';

export const CYCLES: Cycle[] = [
  { id: 1, title: 'Cycle 1: Who Am I? 我是誰？', description: 'Ethics of Identity & Relationships 身份與關係的倫理' },
  { id: 2, title: 'Cycle 2: Living Together 共同生活', description: 'Justice & Responsibility 公義與責任' },
  { id: 3, title: 'Cycle 3: Hard Choices 艱難抉擇', description: 'Life, Technology & Bioethics 生命、科技與生命倫理 (Coming Soon)' },
  { id: 4, title: 'Cycle 4: Citizenship 公民倫理', description: 'Global Ethics & Responsibility 全球倫理與責任 (Coming Soon)' }
];

export const MODULES: Module[] = [
  // ===== CYCLE 1: Who Am I? Ethics of Identity & Relationships =====
  {
    id: 1,
    cycleId: 1,
    title: 'Lesson 1 | What Is Right and Wrong? 什麼是對與錯？',
    subtitle: 'Introduction to Ethics 倫理學導論',
    lifeQuestions: [
      'Think of a time you had to choose between two options and neither felt perfectly "right." What happened? 想一個你必須在兩個選擇中做決定，但都不完美的經歷。發生了什麼？',
      'Where do your ideas of right and wrong come from — family, religion, friends, or something else? 你對「對與錯」的觀念來自哪裡——家庭、宗教、朋友，還是其他？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Becoming a good person 成為好人',
        description: `What kind of person should I become? Virtue ethics focuses on character (品格).

• Christian tradition: The fruit of the Spirit — love, joy, peace, patience, kindness (Galatians 5:22-23). A good person naturally does good things.
• Aristotle (亞里士多德): Virtue is a habit. Courage, honesty, and generosity are built through practice, not just rules.
• Confucian tradition (儒家): Ren (仁, benevolence) and Li (禮, proper conduct) — becoming a junzi (君子, exemplary person) through self-cultivation.
• Buddhist tradition (佛教): Cultivating compassion (慈悲) and wisdom through mindful living.
• Hindu tradition (印度教): Dharma (法, cosmic and moral order) guides each person toward righteous living according to their nature and stage of life.
• Jewish tradition (猶太教): The mussar tradition emphasises character development — cultivating middot (品德, moral traits) like humility, patience, and gratitude.

Key idea: Ethics starts with who you ARE, not just what you DO.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Following principles 遵循原則',
        description: `What rules or principles should I follow? Duty ethics says some actions are right or wrong regardless of outcomes.

• Christian tradition: The Ten Commandments (十誡) and Jesus' command to "love your neighbour as yourself" (Matthew 22:39).
• Kant (康德): Act only according to rules you could want everyone to follow (the Categorical Imperative 定言令式).
• Islamic tradition (伊斯蘭): Sharia principles emphasize justice (公義), compassion, and duty to God and community.
• Human rights (人權): The Universal Declaration of Human Rights — every person has inherent dignity.
• Hindu tradition (印度教): Dharma as cosmic duty — each person has a moral obligation (svadharma) rooted in the universal order.
• Jewish tradition (猶太教): The Torah's commandments (mitzvot) establish moral duties that extend beyond the Jewish community to all humanity ("justice, justice shall you pursue" — Deuteronomy 16:20).

Key idea: Some things are simply RIGHT or WRONG, no matter the consequences.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'Producing the best outcome 追求最好結果',
        description: `What produces the greatest good? Consequentialism judges actions by their results.

• Utilitarian thinking (功利主義): Jeremy Bentham and John Stuart Mill — choose the action that creates the most happiness for the most people.
• Buddhist karma (因果): Actions have consequences that ripple outward; skillful actions lead to good outcomes.
• Pragmatic secular ethics: In a diverse society, we often evaluate policies by asking "what works best for everyone?"
• Christian application: Jesus said "by their fruits you shall know them" (Matthew 7:16) — outcomes matter.
• Daoist tradition (道家): The Dao De Jing teaches that actions aligned with the natural way (道) produce harmonious outcomes; forced or artificial actions create unintended consequences.

Key idea: The RIGHT action is the one that produces the BEST results overall.`
      }
    },
    tensionGuide: `Three Lenses, One Question 三個視角，一個問題

When we face an ethical dilemma, these three frameworks can give different answers:

• Virtue Ethics asks: "What would a person of good character do?"
  德性倫理問：「一個品格好的人會怎麼做？」

• Duty Ethics asks: "What principle or rule applies here?"
  義務倫理問：「這裡適用什麼原則或規則？」

• Consequentialism asks: "Which choice leads to the best outcome?"
  後果倫理問：「哪個選擇能帶來最好的結果？」

Example 例子: Your friend asks you to lie for them to avoid getting in trouble.
- Virtue: A person of integrity tells the truth.
- Duty: Lying is wrong, period.
- Consequence: Maybe the lie prevents greater harm?

The goal of this course is NOT to pick one framework as "correct," but to learn how to THINK through ethical problems using multiple perspectives — and to understand how Christian faith and other traditions illuminate the path.

本課程的目標不是選一個「正確」的框架，而是學習用多重視角來思考倫理問題——並理解基督教信仰和其他傳統如何照亮前路。`,
    discussionPrompts: [
      'Can you think of a situation where these three frameworks would give DIFFERENT advice? Which would you follow, and why? 你能想到一個情境，三種框架會給出不同建議嗎？你會跟隨哪一個？為什麼？',
      'Is it possible to be a "good person" (virtue) who sometimes breaks rules (duty) for a better outcome (consequence)? Give an example. 一個「好人」有時為了更好的結果而違反規則，這可能嗎？舉個例子。',
      'How does your own faith or cultural background shape your view of right and wrong? 你的信仰或文化背景如何塑造你對「對與錯」的看法？'
    ],
    summary: 'Ethics is the practice of asking "what should I do?" with honesty and humility. Three lenses — virtue, duty, and consequence — help us see more clearly. 倫理學是誠實謙卑地問「我應該怎麼做？」的實踐。德性、義務、後果三個視角幫助我們看得更清楚。'
  },
  {
    id: 2,
    cycleId: 1,
    title: 'Lesson 2 | Honesty 誠實',
    subtitle: 'When Is It Hard to Tell the Truth? 什麼時候說真話很難？',
    lifeQuestions: [
      'Have you ever told a "white lie" to protect someone\'s feelings? Did it feel right? 你有沒有說過「善意的謊言」來保護別人的感受？那感覺對嗎？',
      'Is there a difference between lying and not telling the whole truth? 說謊和不說全部真相之間有區別嗎？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'The honest person 誠實的人',
        description: `An honest person tells the truth not because of rules, but because honesty is part of who they are.

• Christian: "The truth will set you free" (John 8:32). Truthfulness reflects God's character.
• Confucian: Xin (信, trustworthiness) is one of the five constants. A junzi's word is reliable.
• Aristotle: Truthfulness is the mean between boastfulness and false modesty.
• Hindu tradition (印度教): Satya (真實, truth) is one of the highest virtues — Gandhi built an entire movement on satyagraha, "holding firm to truth."
• Jewish tradition (猶太教): Emet (真理, truth) is one of God's attributes. The Talmud teaches: "The seal of God is truth."

Honesty is a virtue you BECOME, not just something you DO.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'The duty not to lie 不說謊的義務',
        description: `Kant argued lying is ALWAYS wrong — even to protect someone — because if everyone lied, trust would collapse.

• The Ninth Commandment: "You shall not bear false witness" (Exodus 20:16).
• Kant: If you make lying a universal rule, communication becomes meaningless.
• Islamic tradition: Truthfulness (sidq) is a fundamental moral obligation.
• Jewish tradition (猶太教): While truth is paramount, the Talmud permits "white lies" for the sake of peace (shalom) — showing even duty-based traditions wrestle with this tension.

Can duty ethics handle "white lies"? This is where the tension gets interesting.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'When truth causes harm 當真話造成傷害',
        description: `Sometimes the truth hurts. Should we consider the consequences of honesty?

• If telling the truth will cause unnecessary suffering, is a small lie justified?
• During WWII, people hid Jewish families and lied to Nazi soldiers. Most people agree this was morally right.
• Buddhist "skillful speech": Words should be true, kind, AND helpful — all three matter.
• Daoist tradition (道家): The Dao De Jing says "truthful words are not beautiful; beautiful words are not truthful" — reminding us that real honesty may be uncomfortable, but leads to natural harmony.

Consequentialism says: consider who will be helped or harmed by your words.`
      }
    },
    tensionGuide: `The Honesty Dilemma 誠實的兩難

Scenario 情境: Your best friend shows you a painting they spent weeks on. They're really proud of it. You honestly think it's not very good. They ask: "What do you think?"

• Virtue: A truly honest friend finds a way to be both truthful AND kind.
• Duty: You should not lie. Period. But must you volunteer every critical thought?
• Consequence: Crushing their confidence might do more harm than a gentle response.

Notice how all three frameworks push you to think MORE carefully, not less. Real ethics is rarely about "just follow the rule" — it's about wrestling with complexity.

注意三個框架都推動你更仔細地思考。真正的倫理很少是「只要遵守規則」——而是與複雜性搏鬥。`,
    discussionPrompts: [
      'Is a "white lie" ever the RIGHT thing to do? Under what circumstances? 「善意的謊言」有時候是正確的嗎？在什麼情況下？',
      'How do you balance honesty with kindness in your daily life? 在日常生活中，你如何平衡誠實與善意？',
      'Discuss: "Honesty without compassion is cruelty." Do you agree? 討論：「沒有同情心的誠實是殘忍。」你同意嗎？'
    ],
    summary: 'Honesty is more than not lying — it is the courage to seek truth while caring for others. 誠實不只是不說謊——它是在關心他人的同時勇於尋求真相。'
  },
  {
    id: 3,
    cycleId: 1,
    title: 'Lesson 3 | Bullying & Standing Up 欺凌與挺身而出',
    subtitle: 'When Should I Intervene? 我什麼時候應該介入？',
    lifeQuestions: [
      'Have you ever witnessed someone being bullied or excluded? What did you do — or wish you had done? 你有沒有目睹過別人被欺凌或排擠？你做了什麼——或者希望自己做了什麼？',
      'Why do you think bystanders often stay silent? 你認為旁觀者為什麼常常保持沉默？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Courage and compassion 勇氣與同情',
        description: `Standing up for others requires courage (勇氣) — one of the cardinal virtues.

• Christian: "Speak up for those who cannot speak for themselves" (Proverbs 31:8-9).
• Aristotle: Courage is the mean between cowardice and recklessness. It takes wisdom to act bravely.
• Confucian: Ren (仁) means you cannot be indifferent to others' suffering.
• Buddhist: Compassion (karuna) calls us to act when we see suffering.
• Hindu tradition (印度教): Ahimsa (非暴力, non-violence) is not passive — it means actively opposing harm and protecting the vulnerable.
• Sikh tradition (錫克教): The Sikh concept of the sant-sipahi (聖戰士, saint-soldier) embodies both spiritual gentleness and the courage to defend the oppressed.

A courageous person stands up even when it's costly.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'The obligation to protect 保護的義務',
        description: `Do we have a DUTY to intervene when we see injustice?

• Jesus: "Whatever you did for one of the least of these brothers and sisters, you did for me" (Matthew 25:40).
• Kant: Every person has inherent dignity. Treating someone as less than human violates the moral law.
• Human rights: The duty to protect the vulnerable is enshrined in international law.
• Islamic: "Whoever among you sees evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart" (Hadith).
• Ubuntu philosophy (非洲哲學): "I am because we are" — when one person is harmed, the whole community is diminished. Collective responsibility demands we act.

Silence in the face of injustice is a moral failure.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'What happens if no one acts? 如果沒有人行動會怎樣？',
        description: `Consider the consequences of action AND inaction.

• If you intervene, the bullying might stop — but you might become a target yourself.
• If nobody ever stands up, bullying culture grows and more people suffer.
• Research shows: when ONE bystander speaks up, others often follow.
• The long-term consequences of a culture of silence are far worse than the short-term risk of speaking up.

Consequentialism weighs: what creates less suffering overall?`
      }
    },
    tensionGuide: `The Bystander's Dilemma 旁觀者的兩難

Scenario 情境: In the school cafeteria, a group of students is mocking a classmate about their appearance. The victim looks miserable. You know speaking up might make YOU a target too.

• Virtue: What would a courageous, compassionate person do?
• Duty: Do you have a moral obligation to act, even at personal cost?
• Consequence: What outcome — short-term AND long-term — results from each choice?

All three lenses point toward action, but they disagree on WHY and HOW.

三個視角都指向行動，但在「為什麼」和「如何」上有分歧。`,
    discussionPrompts: [
      'What are practical, safe ways to stand up against bullying? Brainstorm at least three strategies. 有哪些實際、安全的方式來反對欺凌？至少想出三個策略。',
      'Is there a moral difference between the person who bullies and the person who watches and does nothing? 欺凌者和袖手旁觀者之間有道德差別嗎？',
      'How can schools and communities create a culture where standing up for others is normal? 學校和社區如何創造一種挺身而出是常態的文化？'
    ],
    summary: 'Courage is not the absence of fear — it is choosing to act for what is right despite the cost. Every voice matters. 勇氣不是沒有恐懼——而是不顧代價選擇做對的事。每一個聲音都重要。'
  },
  {
    id: 4,
    cycleId: 1,
    title: 'Lesson 4 | Friendship & Loyalty 友誼與忠誠',
    subtitle: 'Loyalty vs Doing the Right Thing 忠誠與做對的事',
    lifeQuestions: [
      'Has a friend ever asked you to do something you felt uncomfortable with? How did you handle it? 有朋友曾經要求你做一些讓你不舒服的事嗎？你怎麼處理的？',
      'What makes a friendship truly good? Is loyalty the most important quality? 什麼讓友誼真正美好？忠誠是最重要的品質嗎？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'True friendship and character 真正的友誼與品格',
        description: `Aristotle identified three types of friendship: utility, pleasure, and virtue. Only "virtue friendships" are deep and lasting — friends who make each other better people.

• Christian: "Iron sharpens iron, and one person sharpens another" (Proverbs 27:17). True friends help you grow.
• Confucian: "Have no friends not equal to yourself" (《論語》) — seek friends who elevate your character.
• A virtuous friend tells you hard truths because they care about your growth, not just your comfort.
• Care ethics (關懷倫理): Nel Noddings argues that ethical life is rooted in caring relationships. A true friend doesn't just follow rules — they respond to the unique needs of the person in front of them.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'When loyalty conflicts with justice 當忠誠與正義衝突',
        description: `What happens when your friend does something wrong? Does loyalty override morality?

• Christian: "Faithful are the wounds of a friend" (Proverbs 27:6). A true friend holds you accountable.
• Kant: Moral duty applies universally — you cannot make exceptions for friends.
• If your friend cheats, steals, or hurts someone, covering for them makes you complicit.
• True loyalty means wanting your friend to be their BEST self, not just protecting them from consequences.
• Hindu tradition (印度教): The Mahabharata teaches that dharma (正法, righteous duty) must override personal loyalty when justice is at stake — even among the closest companions.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'The ripple effects of loyalty 忠誠的漣漪效應',
        description: `Blind loyalty can have terrible consequences.

• If you cover for a friend who is harming others, the harm continues and may worsen.
• If you speak up, the friendship might suffer short-term, but you prevent greater harm.
• History shows: "just following my friends" has led to mob behaviour, gang culture, and even atrocities.
• The best outcome often requires the courage to say "I care about you, but this is wrong."

Consider: what kind of friendship produces the best outcomes for EVERYONE involved?
• Ubuntu (非洲哲學): A person is a person through other people. True friendship strengthens the whole community, not just two individuals.`
      }
    },
    tensionGuide: `The Loyalty Test 忠誠考驗

Scenario 情境: Your close friend has been shoplifting. They show you what they've stolen and laugh about it. They say, "Don't tell anyone — that's what friends do." You feel torn.

• Virtue: What does a truly good friend do in this situation?
• Duty: Is there a moral obligation to not be complicit in wrongdoing?
• Consequence: What happens if you stay silent? What happens if you speak up?

Sometimes the most loving thing is the hardest thing.
有時候最有愛的事也是最困難的事。`,
    discussionPrompts: [
      'Where is the line between loyalty and enabling bad behaviour? 忠誠和縱容壞行為之間的界線在哪裡？',
      'Can you disagree with a friend\'s actions while still loving them? How? 你能不同意朋友的行為卻仍然愛他們嗎？怎麼做？',
      'What would you want YOUR friend to do if YOU were the one making a mistake? 如果是你犯了錯，你希望朋友怎麼做？'
    ],
    summary: 'True friendship is not blind loyalty — it is the courage to love someone enough to be honest with them. 真正的友誼不是盲目的忠誠——而是愛一個人到有勇氣對他們誠實。'
  },
  {
    id: 5,
    cycleId: 1,
    title: 'Lesson 5 | Family Expectations 家庭期望',
    subtitle: 'Family vs Personal Identity 家庭期望與個人身份',
    lifeQuestions: [
      'Do your parents/family have expectations for your future that differ from your own dreams? How does that feel? 你的父母/家人對你的未來有和你自己夢想不同的期望嗎？那是什麼感覺？',
      'How much should children honour their parents\' wishes, even when they disagree? 即使不同意，孩子應該在多大程度上尊重父母的意願？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Filial piety and authenticity 孝道與真實',
        description: `Both Eastern and Western traditions value honouring parents — but also becoming your true self.

• Confucian: Xiao (孝, filial piety) is foundational. But Confucius also said a child should "gently remonstrate" when parents err.
• Christian: "Honour your father and mother" (Exodus 20:12), but also "train up a child in the way they should go" — implying each child has a unique path.
• Aristotle: Living authentically (eudaimonia) means discovering and fulfilling YOUR potential.

The virtuous path: respect your roots while growing into who you are meant to be.
• Hindu tradition (印度教): The concept of svadharma (自己的法, one's own duty) honours both family obligations and individual calling — each person's path is unique within the family order.
• Daoist tradition (道家): Wu wei (無為, effortless action) suggests that forcing a child into an unnatural path creates disharmony; nurturing their natural inclinations leads to balance.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Obligation to family vs self 對家庭與自我的義務',
        description: `Do children have a DUTY to follow their parents' plans? Do parents have a DUTY to respect their children's autonomy?

• In many Asian cultures, family obligation runs deep — career choice, marriage, even where to live.
• Kant: Every person is an autonomous moral agent. No one should be treated merely as a means to someone else's goals.
• Christian tension: Jesus said "whoever loves father or mother more than me is not worthy of me" (Matthew 10:37) — suggesting a higher calling may override family expectation.
• Islamic: Parents deserve utmost respect, but obedience has limits when it conflicts with what is right.
• Jewish tradition (猶太教): Honouring parents (kibbud av va'em) is one of the Ten Commandments, yet the tradition also teaches that parents must not place unbearable burdens on their children.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'What leads to flourishing? 什麼能帶來興旺？',
        description: `Consider the long-term consequences for everyone involved.

• A child forced into a career they hate may become resentful and unfulfilled — bad for everyone.
• A child who completely ignores family wisdom may miss valuable guidance and damage relationships.
• Research shows: the happiest outcomes often come from DIALOGUE — parents sharing their wisdom, children sharing their passion, both compromising.
• In a cosmopolitan city, many families navigate between traditional expectations and modern possibilities.

The best outcome often requires honest conversation, not silent obedience or outright rebellion.
• Care ethics (關懷倫理): Carol Gilligan argues that moral reasoning in families is relational — the best outcomes come from attentive listening and mutual responsiveness, not abstract rules.
• Nationalism and belonging: In some contexts, family expectations carry the weight of national or cultural identity — "you represent our people." This adds another layer of pressure, especially in immigrant or diaspora families.`
      }
    },
    tensionGuide: `Between Two Worlds 兩個世界之間

Scenario 情境: Your parents want you to study medicine because it's stable and prestigious. You are passionate about art and design. They say, "We sacrificed so much for your future — don't waste it." You feel guilty but also trapped.

• Virtue: How do you honour your parents while being true to yourself?
• Duty: What do you OWE your parents? What do you owe YOURSELF?
• Consequence: What path leads to the most flourishing — for you AND your family?

In many cosmopolitan families, this tension is very real. There are no easy answers, but there ARE wise ways to navigate the conversation.

在很多都市家庭中，這種張力非常真實。沒有簡單的答案，但有智慧的方式來引導對話。`,
    discussionPrompts: [
      'How can you show respect for family expectations while also pursuing your own path? 你如何在追求自己道路的同時表達對家庭期望的尊重？',
      'Is there a cultural dimension to this issue? How do different cultures handle the tension between individual and family? 這個問題有文化面向嗎？不同文化如何處理個人與家庭之間的張力？',
      'What advice would you give to a friend caught between their parents\' dreams and their own? 你會給一個夾在父母夢想和自己夢想之間的朋友什麼建議？'
    ],
    summary: 'Honouring family and becoming yourself are not opposites — wisdom lies in finding how they can coexist through honest, loving dialogue. 尊重家庭和成為自己不是對立的——智慧在於通過誠實、有愛的對話找到它們共存的方式。'
  },
  {
    id: 6,
    cycleId: 1,
    title: 'Lesson 6 | Digital Life 數位生活',
    subtitle: 'Ethics of Social Media 社交媒體的倫理',
    lifeQuestions: [
      'How much time do you spend on social media each day? How does it make you feel? 你每天花多少時間在社交媒體上？它讓你有什麼感覺？',
      'Have you ever posted something online you later regretted? What happened? 你有沒有在網上發過後來後悔的東西？發生了什麼？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Digital character 數位品格',
        description: `Who are you online? Is it the same person you are offline?

• Christian: "Whatever is true, noble, right, pure, lovely — think about such things" (Philippians 4:8). What you consume shapes who you become.
• Aristotle: Habits form character. If you habitually compare, envy, or perform online, it changes who you ARE.
• Buddhist mindfulness: Are you using social media with awareness, or is it using YOU?
• Confucian self-cultivation: Even in digital spaces, a junzi maintains integrity.

The question is not "is social media good or bad?" but "what kind of person is it making me?"
問題不是「社交媒體好不好？」而是「它正在把我變成什麼樣的人？」
• Daoist tradition (道家): The Dao De Jing warns against excess and artificiality. Digital simplicity — using technology intentionally rather than compulsively — echoes the Daoist value of returning to what is natural and essential.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Digital responsibilities 數位責任',
        description: `What are our moral obligations in digital spaces?

• Don't share private information about others without consent.
• Don't spread unverified information (fake news).
• Treat others online with the same respect you would face-to-face.
• Kant: Would you want YOUR posts, DMs, and comments to become a universal standard of behaviour?
• The Golden Rule applies online too: "Do unto others as you would have them do unto you."

Rights come with responsibilities — and the digital world is no exception.
• Modern digital ethics (數位倫理): AI algorithms and social media platforms shape what we see and believe. We have a duty to think critically about algorithmic bias and the ethics of data collection — who controls the digital world, and whose voices are amplified or silenced?`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'The real impact of digital choices 數位選擇的真實影響',
        description: `Every click, post, and share has real consequences.

• Cyberbullying has led to depression, anxiety, and even suicide among teenagers.
• Social media comparison culture increases loneliness and low self-esteem.
• Misinformation spreads faster than truth — with real-world consequences.
• BUT: social media also connects communities, raises awareness, and enables positive change.

The consequentialist question: Are my digital habits creating more good or more harm — for myself and others?
• Algorithmic justice (演算法正義): Algorithms can reinforce existing biases — racial profiling, gender stereotypes, economic inequality. The consequences of unchecked technology disproportionately harm marginalised communities.`
      }
    },
    tensionGuide: `Living Digitally with Integrity 有品格地生活在數位世界

Scenario 情境: A classmate posts an embarrassing video of another student without their permission. It's going viral. Some people think it's funny. The student in the video is devastated.

• Virtue: What does digital courage and compassion look like here?
• Duty: What obligations do we have — to the victim, to truth, to each other?
• Consequence: What are the short-term and long-term effects of sharing vs. not sharing vs. reporting?

Your digital footprint is part of your moral identity.
你的數位足跡是你道德身份的一部分。`,
    discussionPrompts: [
      'Should there be different ethical rules for online behaviour vs. face-to-face? Why or why not? 線上行為和面對面行為應該有不同的倫理規則嗎？為什麼？',
      'How can we use social media as a force for good rather than harm? 我們如何將社交媒體作為正面而非負面的力量？',
      'Design a "Digital Ethics Code" for your school — what would the top 3 rules be? 為你的學校設計一份「數位倫理守則」——最重要的三條規則是什麼？'
    ],
    summary: 'In the digital age, character doesn\'t stop at the screen. Be online who you want to be in real life. 在數位時代，品格不止於螢幕。在網上做你想在現實生活中成為的人。'
  },

  // ===== CYCLE 2: Living Together — Justice & Responsibility =====
  {
    id: 7,
    cycleId: 2,
    title: 'Lesson 7 | Fairness 公平',
    subtitle: 'Does Everyone Deserve Equal Treatment? 每個人都值得平等對待嗎？',
    lifeQuestions: [
      'Is treating everyone the SAME always fair? Can you think of a situation where equal treatment is actually unfair? 同樣對待每個人總是公平的嗎？你能想到平等對待其實不公平的情境嗎？',
      'What is the difference between equality (平等) and equity (公正)? 平等和公正有什麼區別？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'The just person 公正的人',
        description: `Justice is a cardinal virtue — not just a system, but a quality of character.

• Christian: "He has shown you, O mortal, what is good: to act justly and to love mercy" (Micah 6:8).
• Aristotle: Justice means giving each person what they are due — which isn't always the same thing.
• Confucian: Yi (義, righteousness) — doing what is morally right in each specific situation.

A just person sees each situation clearly and responds appropriately.
• Jewish tradition (猶太教): Tzedek (正義, justice/righteousness) is not optional — "Justice, justice shall you pursue" (Deuteronomy 16:20). The repetition emphasises both fair process AND fair outcome.
• Sikh tradition (錫克教): The Guru Granth Sahib teaches radical equality — the langar (community kitchen) feeds everyone regardless of caste, class, or background, embodying fairness as a daily practice.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Rights and equal dignity 權利與平等尊嚴',
        description: `Every person has equal dignity and fundamental rights.

• Kant: Every human being is an end in themselves, never merely a means.
• UN Declaration of Human Rights: "All human beings are born free and equal in dignity and rights."
• Christian: All people are made in the image of God (imago Dei) — Genesis 1:27.
• Islamic: All people are equal before God; no race or class is inherently superior.

Duty ethics demands: treat every person's dignity as inviolable.
• Hindu tradition (印度教): The concept of dharmic justice holds that society must be ordered so each person can fulfil their potential — the Bhagavad Gita teaches that righteousness (dharma) sustains the social order.
• Feminist ethics (女性主義倫理): Structural fairness matters — rules that appear "neutral" may systematically disadvantage women, minorities, or the poor. True duty requires examining hidden biases in our systems.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'What system produces the most fairness? 什麼制度產生最多公平？',
        description: `Consequentialism asks: which approach to fairness creates the best outcomes for society?

• Pure equality (everyone gets the same) ignores that people start from different positions.
• Equity (giving more support to those who need it) may produce better overall outcomes.
• John Rawls' "veil of ignorance": design a society as if you don't know what position you'll be born into.
• In diverse cities like Hong Kong or Singapore, fairness policies affect millions of real lives.

The question isn't just "is this fair?" but "does this system create the most flourishing for all?"
問題不只是「這公平嗎？」而是「這個制度是否為所有人創造最多的繁榮？」
• Ubuntu (非洲哲學): Fairness is communal — "I flourish when WE flourish." Policies should be judged by whether they strengthen the bonds of community, not just individual outcomes.
• Nationalism and fairness (民族主義與公平): Should a nation prioritise fairness for its own citizens over global fairness? In cosmopolitan cities, the tension between national interest and universal justice is felt daily — immigration policy, refugee rights, and trade all raise this question.`
      }
    },
    tensionGuide: `Equality vs. Equity 平等 vs. 公正

Scenario 情境: Your school has limited scholarship money. Should it be divided equally among all students, or should more go to students from lower-income families?

• Virtue: What does a just and generous community look like?
• Duty: Does everyone have an equal RIGHT to the funds? Or do the disadvantaged have a greater claim?
• Consequence: Which approach produces the most overall good for the school community?

Fairness is not always simple — it requires wisdom to discern what justice demands in each situation.`,
    discussionPrompts: [
      'Give an example from your city where equality and equity are in tension. 從你的城市舉一個平等和公正有張力的例子。',
      'Is affirmative action (positive discrimination) fair? Why or why not? 正面歧視公平嗎？為什麼？',
      'How does your faith tradition define fairness? 你的信仰傳統如何定義公平？'
    ],
    summary: 'Fairness requires more than equal treatment — it demands the wisdom to see what each person and situation truly needs. 公平不只是平等對待——它需要看見每個人和每個情境真正需要什麼的智慧。'
  },
  {
    id: 8,
    cycleId: 2,
    title: 'Lesson 8 | Wealth & Poverty 財富與貧窮',
    subtitle: 'What Do We Owe Others? 我們欠他人什麼？',
    lifeQuestions: [
      'If you had unlimited money, what would you do with it? How much would you keep for yourself? 如果你有無限的金錢，你會怎麼用？你會為自己留多少？',
      'Is poverty the fault of individuals, or of systems? Or both? 貧窮是個人的錯，還是制度的錯？還是兩者都是？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Generosity as character 慷慨作為品格',
        description: `Generosity is a virtue across virtually every tradition.

• Christian: "It is more blessed to give than to receive" (Acts 20:35). Jesus praised the widow who gave her last two coins.
• Buddhist: Dana (布施, generosity) is the first of the paramitas (perfections). Giving freely loosens attachment.
• Confucian: A junzi is generous without being wasteful.
• Aristotle: Generosity is the mean between extravagance and stinginess.

Wealth is not evil — but attachment to it can corrode character.
• Hindu tradition (印度教): Seva (無私服務, selfless service) is a core virtue — using wealth and ability to serve others without expectation of reward purifies the heart.
• Sikh tradition (錫克教): Vand chakko (分享所有, sharing with others) is one of the three pillars of Sikh life — earnings must be shared with those in need.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Justice demands sharing 正義要求分享',
        description: `Do the wealthy have a moral OBLIGATION to help the poor?

• Christian: "From everyone who has been given much, much will be demanded" (Luke 12:48).
• Islamic: Zakat (天課) — giving 2.5% of wealth to the poor is not charity but a religious DUTY.
• Kant: If you could help someone in desperate need at little cost to yourself, failing to do so violates the moral law.
• Catholic Social Teaching: The "universal destination of goods" — the earth's resources are meant for all.

This isn't about being "nice" — it's about JUSTICE.
• Jewish tradition (猶太教): Tzedakah (義捐, righteous giving) is not charity but an obligation of justice. The word itself shares a root with tzedek (justice). Giving is not generosity — it is what is owed.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'What actually reduces poverty? 什麼真正減少貧窮？',
        description: `Good intentions aren't enough — what WORKS?

• Simply giving money can create dependency. Effective aid empowers people to help themselves.
• Systemic change (education, healthcare, fair wages) often produces better long-term outcomes than individual charity.
• Peter Singer's argument: if you can prevent suffering at little cost to yourself, you are morally obligated to do so.
• In cosmopolitan cities, extreme wealth and poverty often exist side by side. What policies produce the best outcomes?

The consequentialist challenge: not just "should we help?" but "what kind of help actually makes things better?"
後果倫理的挑戰：不只是「我們應該幫助嗎？」而是「什麼樣的幫助真正讓事情變好？」
• Effective altruism (有效利他主義): Building on Peter Singer's work, this movement asks: how can we use evidence and reason to do the MOST good per dollar spent? Some causes are hundreds of times more effective than others.`
      }
    },
    tensionGuide: `The Charity Dilemma 慈善的兩難

Scenario 情境: Walking home, you see a homeless person asking for money. You have HK$100 in your pocket. What do you do?

• Virtue: What does generosity look like in this moment?
• Duty: Do you have an obligation to help? Does it matter how the money is used?
• Consequence: Is giving cash the most effective way to help? Or would donating to a shelter do more good?

Now zoom out: what about global poverty? Do wealthy nations owe anything to poorer ones?`,
    discussionPrompts: [
      'Is it possible to be very wealthy AND ethical? What would that look like? 有可能非常富有同時又合乎倫理嗎？那會是什麼樣子？',
      'Compare individual charity vs. systemic change. Which is more important? 比較個人慈善和制度變革。哪個更重要？',
      'What does your faith tradition say about wealth and responsibility? 你的信仰傳統對財富和責任怎麼說？'
    ],
    summary: 'Wealth brings responsibility. The question is not whether to give, but how to give wisely and work for justice. 財富帶來責任。問題不是是否給予，而是如何智慧地給予並為公義努力。'
  },
  {
    id: 9,
    cycleId: 2,
    title: 'Lesson 9 | Environmental Responsibility 環境責任',
    subtitle: 'What Do We Owe the Earth? 我們欠地球什麼？',
    lifeQuestions: [
      'What is one thing you do (or could do) to help the environment? What stops you from doing more? 你做了（或可以做）什麼來幫助環境？是什麼阻止你做更多？',
      'Should we sacrifice economic growth to protect the environment? 我們應該為了保護環境而犧牲經濟增長嗎？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Stewardship and care 管家精神與關懷',
        description: `A person of good character cares for creation.

• Christian: Humans are stewards (管家) of God's creation (Genesis 2:15). "The Lord God took the man and put him in the Garden of Eden to work it and take care of it."
• Indigenous traditions: Many cultures see humans as part of nature, not rulers over it.
• Buddhist: All sentient beings are interconnected; harming nature harms ourselves.
• Confucian: Harmony (和) with nature is essential to a well-ordered life.

Environmental care is not just policy — it's a reflection of who we are.
• Hindu tradition (印度教): Rivers, trees, and animals are considered sacred. The concept of vasudhaiva kutumbakam (世界一家, "the world is one family") extends care to all living things.
• Daoist tradition (道家): Humans are part of nature, not separate from it. The Dao De Jing teaches: "Humanity follows the earth, earth follows heaven, heaven follows the Dao, the Dao follows what is natural" (人法地，地法天，天法道，道法自然).`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Intergenerational justice 代際公義',
        description: `Do we have a DUTY to future generations?

• They cannot speak for themselves, yet our choices today determine their world.
• Kant: We must act according to principles we'd want to be universal — including for future people.
• Christian: "The earth is the Lord's, and everything in it" (Psalm 24:1) — we have no right to destroy what belongs to God.
• UN Sustainable Development Goals: We have a duty to meet present needs without compromising the future.

The moral question: is it right to consume today what tomorrow's children will need?
• Deep ecology (深層生態學): Aldo Leopold's "land ethic" argues that the natural world has intrinsic value — not just value because it is useful to humans. We have a duty to the ecosystem itself, not just to future people.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'Climate change consequences 氣候變化的後果',
        description: `The consequences of environmental destruction are measurable and severe.

• Rising sea levels threaten coastal cities (including many in Asia).
• Extreme weather events cause suffering disproportionately among the poor.
• Biodiversity loss threatens food systems and human health.
• BUT: extreme environmentalism without considering economic impact can also cause suffering, especially for developing nations.

Consequentialism demands we weigh ALL the outcomes — environmental, economic, and human — and find the path that minimizes total suffering.
• Environmental justice (環境正義): The consequences of pollution and climate change fall disproportionately on the poor and marginalised — communities least responsible for the damage suffer the most. Any honest accounting of outcomes must include this inequality.`
      }
    },
    tensionGuide: `Development vs. Preservation 發展 vs. 保護

Scenario 情境: Your city wants to build a new airport on a nature reserve. It would create 10,000 jobs and boost the economy, but destroy a unique wetland ecosystem.

• Virtue: What does a wise and caring community decide?
• Duty: Do we have obligations to the natural world? To workers who need jobs?
• Consequence: How do we weigh economic benefits against environmental costs?

In cosmopolitan cities, these trade-offs are constant and real.`,
    discussionPrompts: [
      'Is it fair that developing countries are asked to limit emissions when wealthy countries caused most historical pollution? 要求發展中國家限制排放公平嗎？畢竟大部分歷史污染是富裕國家造成的。',
      'What small daily choices can make a real environmental difference? 什麼小的日常選擇能帶來真正的環境改變？',
      'Does your generation have a special responsibility for the environment? Why? 你的世代對環境有特殊的責任嗎？為什麼？'
    ],
    summary: 'We are stewards, not owners, of this earth. Caring for creation is both a duty and a measure of our character. 我們是地球的管家，而非主人。關愛受造物既是責任，也是品格的衡量。'
  },
  {
    id: 10,
    cycleId: 2,
    title: 'Lesson 10 | Cultural Diversity 文化多元',
    subtitle: 'Respecting Difference 尊重差異',
    lifeQuestions: [
      'Think about someone you know from a very different cultural or religious background. What have you learned from them? 想想你認識的一個來自很不同文化或宗教背景的人。你從他們身上學到了什麼？',
      'Is there a limit to cultural tolerance? Are some practices simply wrong, regardless of culture? 文化寬容有界限嗎？有些做法是否不論文化背景都是錯的？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Humility and openness 謙遜與開放',
        description: `Living well in a diverse city requires specific virtues.

• Christian: "Do nothing out of selfish ambition... rather, in humility value others above yourselves" (Philippians 2:3).
• Confucian: "Harmony without uniformity" (和而不同) — a junzi maintains their values while respecting difference.
• Buddhist: Compassion extends to all beings, regardless of background.
• Aristotle: Practical wisdom (phronesis) includes knowing how to navigate complex social situations.

The virtuous person is neither rigidly closed nor uncritically open — they practice discerning respect.
• Ubuntu (非洲哲學): "I am because we are" (umuntu ngumuntu ngabantu). Our humanity is defined through our connections with others — diversity is not a problem to manage but the very fabric of human identity.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Universal rights vs. cultural relativism 普世權利 vs. 文化相對主義',
        description: `Are human rights universal, or are they culturally constructed?

• The Universal Declaration of Human Rights claims certain rights apply to ALL people, everywhere.
• But some argue that "universal rights" are actually Western values imposed on other cultures.
• Kant: Human dignity is non-negotiable. Practices that violate dignity (e.g., forced marriage, slavery) are wrong regardless of cultural context.
• Christian: Every person is made in God's image — this isn't a Western idea, it's a theological claim about all humanity.

The challenge: respecting cultural difference while maintaining moral standards that protect everyone.
• Feminist ethics (女性主義倫理): Whose voices are heard in defining "universal" values? Feminist thinkers remind us that supposedly neutral principles have often excluded women, minorities, and colonised peoples. True universality must listen to marginalised perspectives.
• Nationalism (民族主義): National identity can provide belonging and meaning, but when it becomes exclusionary — "our culture is THE culture" — it can justify discrimination. The duty to respect difference sometimes conflicts with the desire for national unity.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'Does diversity benefit society? 多元化對社會有益嗎？',
        description: `What are the actual consequences of cultural diversity?

• Research shows diverse teams make better decisions and are more innovative.
• Cosmopolitan cities (Hong Kong, Singapore, London, Toronto) thrive precisely because of their diversity.
• BUT: diversity without mutual respect can lead to conflict, segregation, and mistrust.
• The key factor isn't diversity itself, but how a society MANAGES diversity — with dialogue, respect, and shared values.

The consequentialist test: does our approach to diversity create a society where MORE people flourish?
• Intersectionality (交叉性): Kimberlé Crenshaw's insight that people experience overlapping forms of discrimination — race, gender, class, religion — simultaneously. Effective diversity policies must consider these intersections, not just single categories.
• Cosmopolitanism vs. nationalism (世界主義 vs. 民族主義): Cosmopolitanism argues we are "citizens of the world" with obligations to all humanity. Nationalism argues we have special obligations to our own community. In diverse cities, both impulses coexist — and the consequences of leaning too far in either direction are real.`
      }
    },
    tensionGuide: `Tolerance and Its Limits 寬容及其界限

Scenario 情境: A new student joins your class from a culture where girls are not expected to participate in class discussions. The student (a boy) keeps interrupting girls and dismissing their opinions, saying "that's our culture."

• Virtue: How do you respond with both respect and courage?
• Duty: Does cultural background exempt someone from universal standards of respect?
• Consequence: What response creates the best outcome for EVERYONE in the classroom?

Living in a cosmopolitan city means learning to hold two things at once: genuine respect for difference AND commitment to shared values of dignity and equality.`,
    discussionPrompts: [
      'Is it possible to disagree with someone\'s beliefs while still respecting them as a person? How? 是否可能不同意某人的信仰同時尊重他們？怎麼做？',
      'What shared values can people from ALL cultures agree on? 所有文化的人可以在哪些共同價值觀上達成一致？',
      'How does living in a diverse city challenge and strengthen your own beliefs? 生活在多元化的城市如何挑戰和加強你自己的信仰？'
    ],
    summary: 'True respect means engaging with difference honestly — not ignoring it, not condemning it, but learning from it while holding firm to shared human dignity. 真正的尊重意味著誠實地面對差異——不忽視，不譴責，而是從中學習，同時堅守共同的人類尊嚴。'
  },
  {
    id: 11,
    cycleId: 2,
    title: 'Lesson 11 | Authority & Obedience 權威與服從',
    subtitle: 'When to Question Rules 何時質疑規則',
    lifeQuestions: [
      'Have you ever felt a rule was unfair? What did you do about it? 你有沒有覺得某條規則不公平？你做了什麼？',
      'Is obeying authority always the right thing to do? When is it right to disobey? 服從權威總是對的嗎？什麼時候不服從是對的？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'Wisdom to discern 辨別的智慧',
        description: `The virtuous person neither blindly obeys nor reflexively rebels.

• Christian: "We must obey God rather than human beings" (Acts 5:29). The apostles knew when higher loyalty demanded civil disobedience.
• Confucian: A minister should remonstrate with a ruler who is wrong. Blind obedience is not loyalty — it is cowardice.
• Aristotle: Practical wisdom (phronesis) helps us discern when rules serve justice and when they don't.
• Martin Luther King Jr.: "One has a moral responsibility to disobey unjust laws."

Moral maturity means knowing the difference between healthy respect for authority and dangerous submission.
• Daoist tradition (道家): Wu wei (無為) — the best leadership governs without forcing. The Dao De Jing says: "When the best leader's work is done, the people say, 'We did it ourselves.'" Excessive authority contradicts the natural way.
• Jewish prophetic tradition (猶太先知傳統): The Hebrew prophets (Amos, Isaiah, Micah) consistently challenged corrupt rulers and unjust systems — speaking truth to power is a sacred duty, not rebellion.`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Legitimate authority and its limits 合法權威及其限制',
        description: `When must we obey? When must we resist?

• Christian: "Let everyone be subject to the governing authorities" (Romans 13:1), BUT also "we must obey God rather than humans" (Acts 5:29). These two principles create a tension every Christian must navigate.
• Kant: We should obey laws that treat every person as an end in themselves. Laws that dehumanize people have no moral authority.
• Islamic: Obedience to just authority is valued, but "there is no obedience to a created being if it involves disobedience to the Creator."
• The Nuremberg trials established: "I was following orders" is NOT a valid moral defence.
• Feminist ethics (女性主義倫理): Power structures are not neutral — they often serve those already in power. Questioning authority includes asking: WHO made this rule, and WHO does it benefit?
• Nationalism and civic duty (民族主義與公民義務): Patriotism can inspire people to serve their community, but "my country, right or wrong" has justified terrible acts. Healthy civic duty includes the courage to dissent when the nation goes astray.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'The cost of obedience and disobedience 服從與不服從的代價',
        description: `Both obedience and disobedience have consequences.

• The Milgram experiment showed ordinary people will inflict harm when told to by authority figures. The consequences were horrifying.
• Rosa Parks' refusal to give up her bus seat had enormous positive consequences for civil rights.
• But not all disobedience leads to good outcomes — some leads to chaos.
• The key question: does following this rule lead to human flourishing, or does it cause harm?

History's greatest moral heroes were often people who said "no" when everyone else said "yes."
歷史上最偉大的道德英雄往往是在所有人說「是」時說「不」的人。
• Hindu tradition (印度教): Gandhi's satyagraha (堅持真理, "truth-force") showed that nonviolent resistance to unjust authority can transform entire nations — obedience to conscience above obedience to power.
• Nationalist movements: History shows both sides — nationalism has inspired people to resist colonial oppression (positive), but blind patriotism has also led to xenophobia and war (negative). The consequences depend on WHETHER nationalism serves justice or merely serves power.`
      }
    },
    tensionGuide: `Obey or Resist? 服從還是抵抗？

Scenario 情境: Your school implements a rule that students cannot discuss "controversial topics" including politics, religion, or social issues. Teachers who break this rule will be fired. Students who discuss these topics will be disciplined.

• Virtue: What does a wise, courageous student do?
• Duty: Is this rule legitimate? Does it violate any higher principles?
• Consequence: What happens if everyone obeys? What happens if students respectfully push back?

"Obedience" is not the same as "goodness." Sometimes the most ethical thing is to speak truth to power.
「服從」不等於「善良」。有時候最合乎倫理的事是對權力說真話。`,
    discussionPrompts: [
      'Give an example from history of someone who was right to disobey authority. What made their disobedience justified? 從歷史中舉一個有道理不服從權威的例子。是什麼讓他們的不服從合理？',
      'How can we disagree with authority respectfully and constructively? 我們如何尊重和建設性地與權威意見不一致？',
      'Is there a difference between questioning a rule and breaking a rule? 質疑規則和違反規則之間有區別嗎？'
    ],
    summary: 'True respect for authority includes the courage to question it when justice demands. Moral maturity is knowing when to obey and when to stand. 真正尊重權威包括在正義要求時有勇氣質疑它。道德成熟是知道何時服從、何時站立。'
  },
  {
    id: 12,
    cycleId: 2,
    title: 'Lesson 12 | Forgiveness & Reconciliation 寬恕與和解',
    subtitle: 'Can We Let Go and Move Forward? 我們能放下並向前走嗎？',
    lifeQuestions: [
      'Think of a time someone hurt you. Have you forgiven them? Why or why not? 想一個有人傷害你的時候。你原諒他們了嗎？為什麼？',
      'Is forgiveness always the right response? Are there some things that are unforgivable? 寬恕總是正確的回應嗎？有些事情是不可原諒的嗎？'
    ],
    perspectives: {
      [PerspectiveType.VIRTUE]: {
        tradition: 'Virtue Ethics 德性倫理',
        theme: 'The forgiving heart 寬恕的心',
        description: `Forgiveness is a virtue that requires great strength.

• Christian: Jesus on the cross: "Father, forgive them, for they do not know what they are doing" (Luke 23:34). Forgiveness is central to Christian life.
• Buddhist: Holding onto anger is "like grasping a hot coal — you are the one who gets burned."
• Confucian: Shu (恕, reciprocity/forgiveness) is the practice of putting yourself in another's place.
• Nelson Mandela: After 27 years in prison, he chose reconciliation over revenge — transforming a nation.

Forgiveness is not weakness — it is the hardest kind of strength.
• Jewish tradition (猶太教): Teshuvah (悔改/回歸, repentance and return) is a structured process — the wrongdoer must acknowledge the harm, make amends, and demonstrate change. Forgiveness is earned through genuine transformation.
• Hindu tradition (印度教): Kshama (寬恕, forgiveness) is one of the highest virtues in the Mahabharata — "forgiveness is the might of the mighty; it is the weapon of the virtuous."`
      },
      [PerspectiveType.DUTY]: {
        tradition: 'Duty Ethics 義務倫理',
        theme: 'Justice and accountability 公義與問責',
        description: `Does forgiveness mean letting injustice go unpunished?

• Christian: Forgiveness does not mean there are no consequences. "Forgive as the Lord forgave you" (Colossians 3:13), but Romans 13 also affirms the role of justice.
• Kant: Justice requires that wrongdoing be acknowledged and addressed. Cheap forgiveness without accountability is not moral.
• Islamic: Forgiveness is highly valued, but justice ('adl) must also be served.
• Restorative justice: The wrongdoer must acknowledge harm, make amends, and commit to change. Forgiveness complements justice; it doesn't replace it.

Key distinction: forgiving a person ≠ excusing their actions.
• Ubuntu restorative justice (非洲修復式正義): South Africa's Truth and Reconciliation Commission drew on Ubuntu philosophy — justice is not about punishment but about restoring right relationships within the community. The wrongdoer must face the community and account for their actions.`
      },
      [PerspectiveType.CONSEQUENCE]: {
        tradition: 'Consequentialism 後果倫理',
        theme: 'The power of reconciliation 和解的力量',
        description: `What are the consequences of forgiveness vs. holding grudges?

• Psychological research: Forgiveness reduces anxiety, depression, and stress. Bitterness harms the one who holds it.
• South Africa's Truth and Reconciliation Commission showed that a society can heal through honest acknowledgment and forgiveness.
• Cycles of revenge (in families, communities, nations) lead to escalating violence with no end.
• BUT: premature forgiveness without justice can enable abusers to continue. The process matters.

Forgiveness, done well, breaks cycles of harm and creates the possibility of a better future.
• Care ethics (關懷倫理): Healing happens in relationship. Carol Gilligan's work shows that the process of forgiveness is relational — it requires empathy, attentive listening, and genuine care for the other person's story, not just abstract principles.`
      }
    },
    tensionGuide: `Forgive or Fight? 寬恕還是抗爭？

Scenario 情境: A classmate spread a harmful rumour about you that damaged your reputation. They eventually apologized, saying "I'm sorry, I was just joking." They don't seem to fully understand the harm they caused.

• Virtue: What does forgiveness look like when the apology feels inadequate?
• Duty: Does a weak apology fulfil the requirements of justice? What more is needed?
• Consequence: What response will lead to the best outcome for you, for them, and for your community?

Forgiveness is a journey, not a single moment. It may take time, and that's okay.
寬恕是一段旅程，不是一個瞬間。它可能需要時間，這沒有問題。`,
    discussionPrompts: [
      'What is the difference between forgiveness and reconciliation? Can you forgive someone without reconciling with them? 寬恕和和解有什麼區別？你能原諒某人卻不與他們和解嗎？',
      'How do communities and nations practise forgiveness? Give an example. 社區和國家如何實踐寬恕？舉一個例子。',
      'Complete this sentence: "Forgiveness matters because..." 完成這句話：「寬恕很重要，因為......」'
    ],
    summary: 'Forgiveness is not forgetting or excusing — it is the courageous choice to release bitterness and open the door to healing. 寬恕不是遺忘或原諒——而是勇敢地選擇放下苦毒，打開治癒之門。'
  },

  // ===== CYCLE 3 & 4: Placeholders =====
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 13,
    cycleId: 3,
    title: `Lesson ${i + 13} | Advanced Topic 進階課題`,
    subtitle: 'Life, Technology & Bioethics 生命、科技與生命倫理 (Coming Soon)',
    lifeQuestions: ['Think about an ethical question related to technology or science that concerns you. 想一個與科技或科學有關的倫理問題。'],
    perspectives: {
      [PerspectiveType.VIRTUE]: { tradition: 'Virtue Ethics 德性倫理', theme: 'Character in new frontiers 新領域中的品格', description: 'Content coming soon. 內容即將推出。' },
      [PerspectiveType.DUTY]: { tradition: 'Duty Ethics 義務倫理', theme: 'Principles for new challenges 新挑戰的原則', description: 'Content coming soon. 內容即將推出。' },
      [PerspectiveType.CONSEQUENCE]: { tradition: 'Consequentialism 後果倫理', theme: 'Outcomes of innovation 創新的結果', description: 'Content coming soon. 內容即將推出。' }
    },
    tensionGuide: 'This lesson is under development. 本課程正在開發中。',
    discussionPrompts: ['What ethical question about technology keeps you up at night? 什麼關於科技的倫理問題讓你夜不能眠？'],
    summary: 'Coming soon. 即將推出。'
  })),
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 19,
    cycleId: 4,
    title: `Lesson ${i + 19} | Advanced Topic 進階課題`,
    subtitle: 'Global Ethics & Citizenship 全球倫理與公民責任 (Coming Soon)',
    lifeQuestions: ['Think about an ethical issue that affects people across the world. 想一個影響全世界人們的倫理問題。'],
    perspectives: {
      [PerspectiveType.VIRTUE]: { tradition: 'Virtue Ethics 德性倫理', theme: 'Global character 全球品格', description: 'Content coming soon. 內容即將推出。' },
      [PerspectiveType.DUTY]: { tradition: 'Duty Ethics 義務倫理', theme: 'Global duties 全球義務', description: 'Content coming soon. 內容即將推出。' },
      [PerspectiveType.CONSEQUENCE]: { tradition: 'Consequentialism 後果倫理', theme: 'Global outcomes 全球結果', description: 'Content coming soon. 內容即將推出。' }
    },
    tensionGuide: 'This lesson is under development. 本課程正在開發中。',
    discussionPrompts: ['What does it mean to be a responsible global citizen? 做一個負責任的全球公民意味著什麼？'],
    summary: 'Coming soon. 即將推出。'
  }))
];
