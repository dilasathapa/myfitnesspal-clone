
const blogArray = [
    {
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
        title: '15 Make-Ahead Breakfasts Under 300 Calories',
        author: [
            {
                name: 'MYFITNESSPAL’S RECIPES',
                image: 'https://blog.myfitnesspal.com/wp-content/uploads/2023/02/MFPLogoSimple-blue-150x150.png',
                about: 'Healthy, delicious and simple: That’s what we’re about at MyFitnessPal! We make our recipes in our own test kitchen or our registered dietitian hand-selects them personally. Look for nutrition information at the bottom of the recipe or log it directly to MyFitnessPal through the “Log-It” button. Check out our entire collection or explore: low-carb, high-protein • high-fiber • gluten-free • dairy-free • vegetarian • vegan • low sodium'
            }
        ],
        date: 'FEBRUARY 6, 2020',
        narration: 'We’ve all heard more than once that starting the day with a healthy breakfast is great for the brain and the belly. But with all that prework hustle and bustle, not everyone has time to whip up a hot stack of pancakes or bake a fancy frittata. Make your morning routine a breeze by preparing a few nutritious staples ahead of time, like hearty oatmeal cups, simple egg dishes and grab-and-go bars. Your alarm clock will thank you!',
        sub: [
            {
                title: 'MAKE-AHEAD INSTANT OATMEAL JARS',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-1.jpg',
                author: 'MYFITNESSPAL’S ORIGINAL RECIPES',
                narration: 'Nutrition (per serving): Calories: 229; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0mg; Sodium: 152mg; Carbohydrate: 38g; Dietary Fiber: 5g; Sugar: 7g; Protein: 6g'

            },
            {
                title: 'CAULIFLOWER-CRUSTED SPINACH FETA PIE',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-2.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 136; Total Fat: 6g; Saturated Fat: 3g; Monounsaturated Fat: 1g; Cholesterol: 68mg; Sodium: 330mg; Carbohydrate: 11g; Dietary Fiber: 5g; Sugar: 4g; Protein: 13g',
            },
            {
                title: '1-MINUTE BERRY PEANUT BUTTER SMOOTHIE FOR TWO',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-3.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 156; Total Fat: 8g; Saturated Fat: 1g; Monounsaturated Fat: 0g; Cholesterol: 1mg; Sodium: 57mg; Carbohydrate: 19g; Dietary Fiber: 7g; Sugar: 9g; Protein: 5g',

            },
            {
                title: 'PEANUT BUTTER BREAKFAST COOKIES',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-4.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 299; Total Fat: 15g; Saturated Fat: 3g; Monounsaturated Fat: 0g; Cholesterol: 53mg; Sodium: 131mg; Carbohydrate: 34g; Dietary Fiber: 6g; Sugar: 13g; Protein: 11g',

            },
            {
                title: 'LEMONY STRAWBERRY OAT SOAK WITH KIWI MINT',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-5.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 186; Total Fat: 2g; Saturated Fat: 0g; Monounsaturated Fat: 1g; Cholesterol: 3mg; Sodium: 75mg; Carbohydrate: 35g; Dietary Fiber: 5g; Sugar: 18g; Protein: 8g',

            },
            {
                title: 'SAVORY SWEET POTATO MUFFINS',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-6.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 206; Total Fat: 7g; Saturated Fat: 1g; Monounsaturated Fat: 4g; Cholesterol: 0mg; Sodium: 196mg; Carbohydrate: 31g; Dietary Fiber: 4g; Sugar: 8g; Protein: 5g',

            },
            {
                title: 'PUMPKIN PIE OATMEAL',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-7.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 284; Total Fat: 5g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 8mg; Sodium: 231mg; Carbohydrate: 45g; Dietary Fiber: 5g; Sugar: 17g; Protein: 13g',

            },
            {
                title: 'KETO WALNUT-CASHEW PORRIDGE',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-8.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 291; Total Fat: 20g; Saturated Fat: 3g; Monounsaturated Fat: 6g; Cholesterol: 0mg; Sodium: 60mg; Carbohydrate: 26g; Dietary Fiber: 9g; Sugar: 11g; Protein: 8g',

            },
            {
                title: 'VEGAN CHICKPEA FRITTATA',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-9.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 126; Total Fat: 4g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0 mg; Sodium: 223mg; Carbohydrate: 17g; Dietary Fiber: 4g; Sugar: 4g; Protein: 6g',

            },
            {
                title: 'GOLDEN OVERNIGHT OATS WITH BLUEBERRIES',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-10.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 212; Total Fat: 5g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 0mg; Sodium: 91mg; Carbohydrate: 39g; Dietary Fiber: 7g; Sugar: 8g; Protein: 6g',

            },
            {
                title: 'AVOCADO, KALE AND SPINACH SMOOTHIE',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-11.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 210; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 4g; Polyunsaturated Fat: 1g; Cholesterol: 3mg; Sodium: 43mg; Carbohydrate: 35mg; Dietary Fiber: 7g; Sugar: 18g; Protein: 7g',

            },
            {
                title: 'VEGAN BANANA MUFFINS WITH ALMOND-APPLE SPREAD',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-12.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 125; Total Fat: 8g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0mg; Sodium: 22mg; Carbohydrate: 12g; Dietary Fiber: 2g; Sugar: 7g; Protein: 3g',

            },
            {
                title: 'COLD BREW MOCHA SMOOTHIE',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-13.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 154; Total Fat: 3g; Saturated Fat: 2g; Monounsaturated Fat: 0g; Cholesterol: 14mg; Sodium: 66mg; Carbohydrate: 26g; Dietary Fiber: 3g; Sugar: 20g; Protein: 9g',

            },
            {
                title: 'GREEN SMOOTHIE OVERNIGHT OATS',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-14-1.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 218; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 1mg; Sodium: 33mg; Carbohydrate: 31g; Dietary Fiber: 5g; Sugar: 13g; Protein: 13g',

            },
            {
                title: 'APPLE CIDER MINI MUFFINS',
                img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-15.jpg',
                author: 'MYFITNESSPAL’S RECIPES',
                narration: 'Nutrition (per serving): Calories: 98; Total Fat: 3g; Saturated Fat: 1.5g; Monounsaturated Fat: 1g; Cholesterol: 24mg; Sodium: 74mg; Carbohydrate: 18g; Dietary Fiber: 1g; Sugar: 15g; Protein: 2g',

            }
        ]
    }
]

const blogArr = [
    {
        id: 1,
        title: 'These 10 Sugar Swaps Are Sure to Boost Heart Health',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 2,
        title: 'How to Get Weight Loss Motivation Back in February',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51980-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 3,
        title: 'Essential Guide to MyFitnessPal Premium',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 4,
        title: 'The Health Benefits of Chocolate',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51920-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 5,
        title: 'Essential Guide to Sugar',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/36365-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 6,
        title: '15 Make-Ahead Breakfasts Under 300 Calories',
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
        narration: ''
    },
    {
        id: 1,
        title: '',
        img: '',
        narration: ''
    },
    {
        id: 1,
        title: '',
        img: '',
        narration: ''
    },
    {
        id: 1,
        title: '',
        img: '',
        narration: ''
    },
    {
        id: 1,
        title: '',
        img: '',
        narration: ''
    },
    {
        id: 1,
        title: '',
        img: '',
        narration: ''
    },
]

const blogArticles = [
    {
        id: 1,
        img: 'https://blog.myfitnesspal.com/strategies-to-boost-heart-health/',
        title: '5 Strategies to Boost Heart Health',
        date: 'FEBRUARY 3, 2023'
    },
    {
        id: 2,
        img: 'https://blog.myfitnesspal.com/these-sugar-swaps-boost-heart-health/',
        title: 'These 10 Sugar Swaps Are Sure to Boost Heart Health',
        date: 'FEBRUARY 1, 2023'
    },
    {
        id: 3,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2019/02/Blog-Main-image-750x592.jpg.webp',
        title: '4-Week Treadmill Training Plan',
        date: 'JANUARY 30, 2023'
    },
    {
        id: 4,
        img: 'https://blog.myfitnesspal.com/8-powerful-goal-setting-tips-from-experts/',
        title: '8 Powerful Goal-Setting Tips From Experts',
        date: 'JANUARY 27, 2023'
    },
    {
        id: 5,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2019/05/5-Fueling-Mistakes-Runners-Need-to-Avoid-2-750x592.jpg',
        title: '5 Fueling Mistakes Runners Need to Avoid',
        date: 'JANUARY 25, 2023'
    },
    {
        id: 6,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2022/02/6-Tips-to-Make-Your-New-Years-Resolutions-Last-750x592.jpg.webp',
        title: '6 Tips to Make Your New Year’s Resolutions Last',
        date: 'JANUARY 23, 2023'
    },
    {
        id: 7,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/11/VS-Blog-Featured-Image-Alisha1-750x592.jpg',
        title: 'A Health Scare Encouraged Alisha to Change Her Lifestyle and Lose 70 Pounds',
        date: 'JANUARY 20, 2023'
    },
    {
        id: 8,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2019/03/Before-After-Hero-1-750x592.jpg',
        title: 'How David Turned a New Year’s Resolution Into a New Life',
        date: 'JANUARY 18, 2023'
    },
    {
        id: 9,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2022/12/120922_PARTNERSHIP_MyFitnessPal_1504x944_4-750x592.jpg',
        title: 'Feel the Transformation with Exclusive Content from our Partners at obé Fitness',
        date: 'JANUARY 17, 2023'
    },
    {
        id: 10,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Fitness-Basics-Goal-Setting-and-Motivation-2-1-750x592.jpg',
        title: 'Fitness Basics: Goal Setting and Motivation',
        date: 'JANUARY 13, 2023'
    },
    {
        id: 11,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/11/UACF-Ask-the-RD-Macros-Featured-750x592.jpg',
        title: 'Ask the RD: How Do You Determine the Right Macro Mix?',
        date: 'JANUARY 12, 2023'
    },
    {
        id: 12,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2014/03/44-Nicknames-for-Added-Sugar-2-750x592.jpg',
        title: '44 Nicknames for Added Sugar',
        date: 'JANUARY 11, 2023'
    },
    {
        id: 13,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2017/09/Are-You-Eating-Enough-Protein_2-750x592.jpg',
        title: 'Are You Eating Enough Protein?',
        date: 'JANUARY 10, 2023'
    },
    {
        id: 14,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/04/7-Time-Saving-Tips-for-Keeping-an-Accurate-Food-Journal-2-750x592.jpg.webp',
        title: '7 Time-Saving Tips for Keeping an Accurate Food Journal',
        date: 'JANUARY 9, 2023'
    },
    {
        id: 15,
        img: 'https://blog.myfitnesspal.com/wp-content/uploads/2019/01/Clean-Green-Mango-Kale-Smoothie-750x592.jpg',
        title: 'Clean Green Mango Kale Smoothie',
        date: 'JANUARY 6, 2023'
    },

]