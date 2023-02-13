import React from 'react'
import postStyle from "./BlogStyles.module.css";
export default function BlogPost() {
    const blogArray=
        {
            img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
            title:'15 Make-Ahead Breakfasts Under 300 Calories',
            author:[
                {
                    name:'MYFITNESSPAL’S RECIPES',
                    image:'https://blog.myfitnesspal.com/wp-content/uploads/2023/02/MFPLogoSimple-blue-150x150.png',
                    about:'Healthy, delicious and simple: That’s what we’re about at MyFitnessPal! We make our recipes in our own test kitchen or our registered dietitian hand-selects them personally. Look for nutrition information at the bottom of the recipe or log it directly to MyFitnessPal through the “Log-It” button. Check out our entire collection or explore: low-carb, high-protein • high-fiber • gluten-free • dairy-free • vegetarian • vegan • low sodium'
                }
            ],
            date:'FEBRUARY 6, 2020',
            narration:'We’ve all heard more than once that starting the day with a healthy breakfast is great for the brain and the belly. But with all that prework hustle and bustle, not everyone has time to whip up a hot stack of pancakes or bake a fancy frittata. Make your morning routine a breeze by preparing a few nutritious staples ahead of time, like hearty oatmeal cups, simple egg dishes and grab-and-go bars. Your alarm clock will thank you!',
            sub:[
                {
                    title:'MAKE-AHEAD INSTANT OATMEAL JARS',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-1.jpg',
                    author:'MYFITNESSPAL’S ORIGINAL RECIPES',
                    narration:'Nutrition (per serving): Calories: 229; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0mg; Sodium: 152mg; Carbohydrate: 38g; Dietary Fiber: 5g; Sugar: 7g; Protein: 6g'
            
                },
                {
                    title:'CAULIFLOWER-CRUSTED SPINACH FETA PIE',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-2.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 136; Total Fat: 6g; Saturated Fat: 3g; Monounsaturated Fat: 1g; Cholesterol: 68mg; Sodium: 330mg; Carbohydrate: 11g; Dietary Fiber: 5g; Sugar: 4g; Protein: 13g',
                },
                {
                    title:'1-MINUTE BERRY PEANUT BUTTER SMOOTHIE FOR TWO',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-3.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 156; Total Fat: 8g; Saturated Fat: 1g; Monounsaturated Fat: 0g; Cholesterol: 1mg; Sodium: 57mg; Carbohydrate: 19g; Dietary Fiber: 7g; Sugar: 9g; Protein: 5g',
    
                },
                {
                    title:'PEANUT BUTTER BREAKFAST COOKIES',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-4.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 299; Total Fat: 15g; Saturated Fat: 3g; Monounsaturated Fat: 0g; Cholesterol: 53mg; Sodium: 131mg; Carbohydrate: 34g; Dietary Fiber: 6g; Sugar: 13g; Protein: 11g',
                    
                },
                {
                    title:'LEMONY STRAWBERRY OAT SOAK WITH KIWI MINT',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-5.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 186; Total Fat: 2g; Saturated Fat: 0g; Monounsaturated Fat: 1g; Cholesterol: 3mg; Sodium: 75mg; Carbohydrate: 35g; Dietary Fiber: 5g; Sugar: 18g; Protein: 8g',
                    
                },
                {
                    title:'SAVORY SWEET POTATO MUFFINS',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-6.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 206; Total Fat: 7g; Saturated Fat: 1g; Monounsaturated Fat: 4g; Cholesterol: 0mg; Sodium: 196mg; Carbohydrate: 31g; Dietary Fiber: 4g; Sugar: 8g; Protein: 5g',
                    
                },
                {
                    title:'PUMPKIN PIE OATMEAL',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-7.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 284; Total Fat: 5g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 8mg; Sodium: 231mg; Carbohydrate: 45g; Dietary Fiber: 5g; Sugar: 17g; Protein: 13g',
                    
                },
                {
                    title:'KETO WALNUT-CASHEW PORRIDGE',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-8.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 291; Total Fat: 20g; Saturated Fat: 3g; Monounsaturated Fat: 6g; Cholesterol: 0mg; Sodium: 60mg; Carbohydrate: 26g; Dietary Fiber: 9g; Sugar: 11g; Protein: 8g',
                    
                },
                {
                    title:'VEGAN CHICKPEA FRITTATA',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-9.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 126; Total Fat: 4g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0 mg; Sodium: 223mg; Carbohydrate: 17g; Dietary Fiber: 4g; Sugar: 4g; Protein: 6g',
                    
                },
                {
                    title:'GOLDEN OVERNIGHT OATS WITH BLUEBERRIES',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-10.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 212; Total Fat: 5g; Saturated Fat: 1g; Monounsaturated Fat: 1g; Cholesterol: 0mg; Sodium: 91mg; Carbohydrate: 39g; Dietary Fiber: 7g; Sugar: 8g; Protein: 6g',
                    
                },
                {
                    title:'AVOCADO, KALE AND SPINACH SMOOTHIE',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-11.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 210; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 4g; Polyunsaturated Fat: 1g; Cholesterol: 3mg; Sodium: 43mg; Carbohydrate: 35mg; Dietary Fiber: 7g; Sugar: 18g; Protein: 7g',
                    
                },
                {
                    title:'VEGAN BANANA MUFFINS WITH ALMOND-APPLE SPREAD',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-12.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 125; Total Fat: 8g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0mg; Sodium: 22mg; Carbohydrate: 12g; Dietary Fiber: 2g; Sugar: 7g; Protein: 3g',
                    
                },
                {
                    title:'COLD BREW MOCHA SMOOTHIE',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-13.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 154; Total Fat: 3g; Saturated Fat: 2g; Monounsaturated Fat: 0g; Cholesterol: 14mg; Sodium: 66mg; Carbohydrate: 26g; Dietary Fiber: 3g; Sugar: 20g; Protein: 9g',
                    
                },
                {
                    title:'GREEN SMOOTHIE OVERNIGHT OATS',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-14-1.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 218; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 1mg; Sodium: 33mg; Carbohydrate: 31g; Dietary Fiber: 5g; Sugar: 13g; Protein: 13g',
                    
                },
                {
                    title:'APPLE CIDER MINI MUFFINS',
                    img:'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-15.jpg',
                    author:'MYFITNESSPAL’S RECIPES',
                    narration:'Nutrition (per serving): Calories: 98; Total Fat: 3g; Saturated Fat: 1.5g; Monounsaturated Fat: 1g; Cholesterol: 24mg; Sodium: 74mg; Carbohydrate: 18g; Dietary Fiber: 1g; Sugar: 15g; Protein: 2g',
                    
                }
            ]
        }
    
  return (
    <div>
        
        <div className={postStyle.bpost_main_con}>
            <h1>
                    {blogArray.title}
            </h1>
            <div className={postStyle.bpost_auth_topcon}>
                <img className={postStyle.bpost_auth_img} src={blogArray.author[0].image} alt={blogArray.author[0].name} />
                <p>
                    BY <span>{blogArray.author[0].name}</span> 
                    &nbsp; {blogArray.date}
                </p>
            </div>

            <div className={postStyle.bpost_auth_mnarration}>
                <p>
                    {blogArray.narration}
                </p>
            </div>

            <div>
                {
                   blogArray.sub.map((el,index)=>{
                    return (
                        <div style={{textAlign:'left',lineHeight:'25px' }}> 
                            <div style={{display:'flex'}}>
                                <h3>{index+1}</h3>
                                &nbsp;
                                <h3 style={{color:'#0066ee'}}>{el.title}</h3>
                                <h3  style={{color:'rgb(65, 62, 62)'}}>
                                &nbsp;|&nbsp; {el.author}
                                </h3>
                            </div>
                            <div>
                                <img src={el.img} alt={el.title} />
                            </div>
                            <div >
                                <p style={{fontStyle:'italic',fontSize:'18px',color:'rgb(65, 62, 62)',fontWeight:300}}>{el.narration}</p>
                            </div>
                        </div>
                    )
                   })
                }
            </div>

            <div>
                <h3>ABOUT THE AUTHOR</h3>
                <div>
                    <img src={blogArray.author[0].image} alt={blogArray.author[0].name} />
                    <div>
                        <h3>{blogArray.author[0].name}</h3>
                        <p>
                            {blogArray.author[0].about}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
