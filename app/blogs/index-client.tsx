'use client';
import Header from '../components/Header';
const s0 = [
  { t: "Why Mosquitoes Take Over Your Yard and How to Stop Them", h: '/blogs/why-mosquitoes-take-over-your-yard-and-how-to-stop-them' },
  { t: "How Professional Mosquito Treatments Actually Work", h: '/blogs/how-professional-mosquito-treatments-actually-work' },
  { t: "Why Mosquito Treatments Are the Key to Long Lasting Mosquito Control", h: '/blogs/why-mosquito-treatments-are-the-key-to-long-lasting-mosquito-control' },
  { t: "Why Mosquito Spraying Is Essential for Reducing Mosquito Populations", h: '/blogs/why-mosquito-spraying-is-essential-for-reducing-mosquito-populations' },
  { t: "Mosquito Yard Treatment How Our Barrier Protection Works", h: '/blogs/mosquito-yard-treatment-how-our-barrier-protection-works' },
  { t: "Mosquito Prevention Tips a Simple Guide for Homeowners", h: '/blogs/mosquito-prevention-tips-a-simple-guide-for-homeowners' },
  { t: "Mosquito Season in Texas When They Start Peak and Slow Down", h: '/blogs/mosquito-season-in-texas-when-they-start-peak-and-slow-down' },
  { t: "Diy Mosquito Control vs Professional Mosquito Treatment", h: '/blogs/diy-mosquito-control-vs-professional-mosquito-treatment' },
  { t: "Mosquito Breeding Sites How They Multiply and How to Stop Them", h: '/blogs/mosquito-breeding-sites-how-they-multiply-and-how-to-stop-them' },
  { t: "How Often Should You Treat for Mosquitoes in Texas", h: '/blogs/how-often-should-you-treat-for-mosquitoes-in-texas' },
  { t: "Why Mosquitoes Bite Some People More Than Others", h: '/blogs/why-mosquitoes-bite-some-people-more-than-others' },
  { t: "Why Mosquitoes Come Out After Rain", h: '/blogs/why-mosquitoes-come-out-after-rain' },
  { t: "Where Mosquitoes Hide During the Day", h: '/blogs/where-mosquitoes-hide-during-the-day' },
  { t: "How Mosquitoes Survive Winter in Texas", h: '/blogs/how-mosquitoes-survive-winter-in-texas' },
  { t: "Why Mosquitoes Are Worse in Humid Weather", h: '/blogs/why-mosquitoes-are-worse-in-humid-weather' },
  { t: "How Mosquitoes Spread Disease in Texas", h: '/blogs/how-mosquitoes-spread-disease-in-texas' },
  { t: "Why Mosquitoes Swarm Certain Yards", h: '/blogs/why-mosquitoes-swarm-certain-yards' },
  { t: "How Long Do Mosquitoes Live in Texas", h: '/blogs/how-long-do-mosquitoes-live-in-texas' },
  { t: "Why Mosquitoes Stay Active After Sunset", h: '/blogs/why-mosquitoes-stay-active-after-sunset' },
  { t: "How Weather Fronts Affect Mosquito Activity", h: '/blogs/how-weather-fronts-affect-mosquito-activity' },
  { t: "Why Mosquitoes Are Worse Near Creeks and Drainage Areas", h: '/blogs/why-mosquitoes-are-worse-near-creeks-and-drainage-areas' },
  { t: "How Irrigation Systems Increase Mosquito Pressure", h: '/blogs/how-irrigation-systems-increase-mosquito-pressure' },
  { t: "Why Mosquitoes Return Quickly After Diy Fogging", h: '/blogs/why-mosquitoes-return-quickly-after-diy-fogging' },
  { t: "How Mosquitoes Find Hosts in the Dark", h: '/blogs/how-mosquitoes-find-hosts-in-the-dark' },
  { t: "Why Some Yards Stay Mosquito Free Naturally", h: '/blogs/why-some-yards-stay-mosquito-free-naturally' },
  { t: "How Landscaping Design Affects Mosquito Populations", h: '/blogs/how-landscaping-design-affects-mosquito-populations' },
  { t: "Why Mosquitoes Avoid Windy Areas", h: '/blogs/why-mosquitoes-avoid-windy-areas' },
  { t: "How Mosquitoes Detect Body Heat and Scent", h: '/blogs/how-mosquitoes-detect-body-heat-and-scent' },
  { t: "Why Mosquitoes Spike After Lawn Mowing", h: '/blogs/why-mosquitoes-spike-after-lawn-mowing' },
  { t: "How Mosquitoes Choose Where to Lay Eggs", h: '/blogs/how-mosquitoes-choose-where-to-lay-eggs' },
];
const s1 = [
  { t: "How Flea Treatments Work Adulticide Igr and Residual Protection Explained", h: '/blogs/how-flea-treatments-work-adulticide-igr-and-residual-protection-explained' },
  { t: "How Long Flea Treatments Last and What Affects Their Duration", h: '/blogs/how-long-flea-treatments-last-and-what-affects-their-duration' },
  { t: "Why Fleas Keep Coming Back the Real Causes of Reinfestations", h: '/blogs/why-fleas-keep-coming-back-the-real-causes-of-reinfestations' },
  { t: "Indoor vs Outdoor Flea Control What Homeowners Need to Know", h: '/blogs/indoor-vs-outdoor-flea-control-what-homeowners-need-to-know' },
  { t: "How Weather Shade and Wildlife Affect Flea Pressure in Your Yard", h: '/blogs/how-weather-shade-and-wildlife-affect-flea-pressure-in-your-yard' },
  { t: "Flea Eggs Larvae and Pupae Where They Hide in Your Yard", h: '/blogs/flea-eggs-larvae-and-pupae-where-they-hide-in-your-yard' },
  { t: "What to Expect After a Flea Treatment Day By Day Results Timeline", h: '/blogs/what-to-expect-after-a-flea-treatment-day-by-day-results-timeline' },
  { t: "Why Diy Flea Control Fails the Hidden Reasons Homeowners Struggle", h: '/blogs/why-diy-flea-control-fails-the-hidden-reasons-homeowners-struggle' },
  { t: "How Often You Should Treat Your Yard for Fleas", h: '/blogs/how-often-you-should-treat-your-yard-for-fleas' },
  { t: "The Most Common Flea Hotspots in Yards and Why They Matter", h: '/blogs/the-most-common-flea-hotspots-in-yards-and-why-they-matter' },
  { t: "How Pets Bring Fleas Into the Home and Yard", h: '/blogs/how-pets-bring-fleas-into-the-home-and-yard' },
  { t: "Flea Allergy Reactions in Pets Why One Bite Can Cause Severe Symptoms", h: '/blogs/flea-allergy-reactions-in-pets-why-one-bite-can-cause-severe-symptoms' },
  { t: "How to Prepare Your Yard for a Flea Treatment What Homeowners Should Do Before Service", h: '/blogs/how-to-prepare-your-yard-for-a-flea-treatment-what-homeowners-should-do-before-service' },
  { t: "What Homeowners Should Do After a Flea Treatment Essential Post Treatment Care", h: '/blogs/what-homeowners-should-do-after-a-flea-treatment-essential-post-treatment-care' },
  { t: "How Seasonal Weather Changes Flea Activity Throughout the Year", h: '/blogs/how-seasonal-weather-changes-flea-activity-throughout-the-year' },
  { t: "Environmental Factors That Increase Flea Activity in Your Yard", h: '/blogs/environmental-factors-that-increase-flea-activity-in-your-yard' },
  { t: "The Most Effective Flea Prevention Tips for Homeowners", h: '/blogs/the-most-effective-flea-prevention-tips-for-homeowners' },
  { t: "Why Fleas Keep Coming Back the Real Causes of Reinfestation", h: '/blogs/why-fleas-keep-coming-back-the-real-causes-of-reinfestation' },
  { t: "Common Flea Treatment Myths Homeowners Believe and Why They Cause Problems", h: '/blogs/common-flea-treatment-myths-homeowners-believe-and-why-they-cause-problems' },
  { t: "How to Control Fleas When You Have Multiple Pets", h: '/blogs/how-to-control-fleas-when-you-have-multiple-pets' },
  { t: "Why Shaded Yards Have the Worst Flea Problems and How to Control Them", h: '/blogs/why-shaded-yards-have-the-worst-flea-problems-and-how-to-control-them' },
  { t: "The Most Common Flea Control Mistakes Homeowners Make and How to Avoid Them", h: '/blogs/the-most-common-flea-control-mistakes-homeowners-make-and-how-to-avoid-them' },
  { t: "A Complete Flea Control Guide for Pet Owners", h: '/blogs/a-complete-flea-control-guide-for-pet-owners' },
  { t: "Why Indoor Pets Still Get Fleas and How to Protect Them", h: '/blogs/why-indoor-pets-still-get-fleas-and-how-to-protect-them' },
  { t: "Why Outdoor Pets Have the Highest Flea Risk and How to Protect Them", h: '/blogs/why-outdoor-pets-have-the-highest-flea-risk-and-how-to-protect-them' },
  { t: "Why Large Yards Have More Flea Problems and How to Control Them Effectively", h: '/blogs/why-large-yards-have-more-flea-problems-and-how-to-control-them-effectively' },
  { t: "Why Small Yards Still Get Big Flea Infestations and How to Control Them", h: '/blogs/why-small-yards-still-get-big-flea-infestations-and-how-to-control-them' },
  { t: "Why Professional Flea Control Works Better Than Diy Methods", h: '/blogs/why-professional-flea-control-works-better-than-diy-methods' },
  { t: "Why Some Homes Keep Getting Fleas", h: '/blogs/why-some-homes-keep-getting-fleas' },
];
const s2 = [
  { t: "How to Identify the Most Common Weeds in Your Lawn", h: '/blogs/how-to-identify-the-most-common-weeds-in-your-lawn' },
  { t: "Why Weeds Come Back Every Year and How Lawn Treatments Stop Them", h: '/blogs/why-weeds-come-back-every-year-and-how-lawn-treatments-stop-them' },
  { t: "Bold Anchor for Linking Weed Control and Fertilization", h: '/blogs/bold-anchor-for-linking-weed-control-and-fertilization' },
  { t: "Seasonal Weed Pressure When Your Lawn Is Most Vulnerable", h: '/blogs/seasonal-weed-pressure-when-your-lawn-is-most-vulnerable' },
  { t: "How Professional Weed Control Applications Actually Work", h: '/blogs/how-professional-weed-control-applications-actually-work' },
  { t: "The Science Behind Lawn Fertilization What Your Grass Really Needs", h: '/blogs/the-science-behind-lawn-fertilization-what-your-grass-really-needs' },
  { t: "Nitrogen Phosphorus Potassium Understanding Lawn Fertilizer Labels", h: '/blogs/nitrogen-phosphorus-potassium-understanding-lawn-fertilizer-labels' },
  { t: "Granular vs Liquid Fertilizer Which Produces Better Results", h: '/blogs/granular-vs-liquid-fertilizer-which-produces-better-results' },
  { t: "How Soil Structure Impacts Weed Growth and Lawn Color", h: '/blogs/how-soil-structure-impacts-weed-growth-and-lawn-color' },
  { t: "Summer Weed Control How to Protect Your Lawn in Extreme Heat", h: '/blogs/summer-weed-control-how-to-protect-your-lawn-in-extreme-heat' },
  { t: "Fall Fertilization the Secret to a Thick Lawn Next Spring", h: '/blogs/fall-fertilization-the-secret-to-a-thick-lawn-next-spring' },
  { t: "Winter Pre Emergent Why Timing Matters More Than Product", h: '/blogs/winter-pre-emergent-why-timing-matters-more-than-product' },
  { t: "How Bermuda Grass Responds to Weed Control and Fertilizer", h: '/blogs/how-bermuda-grass-responds-to-weed-control-and-fertilizer' },
  { t: "St Augustine Lawn Treatments What Makes This Turf Different", h: '/blogs/st-augustine-lawn-treatments-what-makes-this-turf-different' },
  { t: "Zoysia Grass the Most Misunderstood Lawn in North Texas", h: '/blogs/zoysia-grass-the-most-misunderstood-lawn-in-north-texas' },
  { t: "Warm Season Turf Growth Cycles and How They Affect Weed Pressure", h: '/blogs/warm-season-turf-growth-cycles-and-how-they-affect-weed-pressure' },
  { t: "How Soil Health Impacts Weed Growth in Warm Season Lawns", h: '/blogs/how-soil-health-impacts-weed-growth-in-warm-season-lawns' },
  { t: "Why Consistent Lawn Treatments Prevent Weeds Better Than Spot Spraying", h: '/blogs/why-consistent-lawn-treatments-prevent-weeds-better-than-spot-spraying' },
  { t: "How Lawn Spraying Targets Weeds At the Right Time for Maximum Effectiveness", h: '/blogs/how-lawn-spraying-targets-weeds-at-the-right-time-for-maximum-effectiveness' },
  { t: "Why Professional Lawn Treatments Deliver Better Longer Lasting Weed Control", h: '/blogs/why-professional-lawn-treatments-deliver-better-longer-lasting-weed-control' },
  { t: "How Proper Mowing Practices Reduce Weed Pressure in Warm Season Lawns", h: '/blogs/how-proper-mowing-practices-reduce-weed-pressure-in-warm-season-lawns' },
  { t: "How Lawn Spraying Complements Mowing to Create a Weed Resistant Lawn", h: '/blogs/how-lawn-spraying-complements-mowing-to-create-a-weed-resistant-lawn' },
  { t: "Why Professional Lawn Programs Outperform Single Step Weed Control", h: '/blogs/why-professional-lawn-programs-outperform-single-step-weed-control' },
  { t: "How Seasonal Lawn Care Strengthens Turf and Reduces Weed Pressure", h: '/blogs/how-seasonal-lawn-care-strengthens-turf-and-reduces-weed-pressure' },
  { t: "How Lawn Spraying Helps Control Hard to Kill Weeds in Warm Season Lawns", h: '/blogs/how-lawn-spraying-helps-control-hard-to-kill-weeds-in-warm-season-lawns' },
  { t: "Why Professional Lawn Treatments Are Essential for Managing Severe Weed Infestations", h: '/blogs/why-professional-lawn-treatments-are-essential-for-managing-severe-weed-infestations' },
  { t: "How Lawn Treatments Restore Thin Or Damaged Turf After Heavy Weed Pressure", h: '/blogs/how-lawn-treatments-restore-thin-or-damaged-turf-after-heavy-weed-pressure' },
  { t: "How Weed Pressure Changes Throughout the Year and Why Timing Matters", h: '/blogs/how-weed-pressure-changes-throughout-the-year-and-why-timing-matters' },
  { t: "Why Fertilizer Timing Matters More Than the Product You Use", h: '/blogs/why-fertilizer-timing-matters-more-than-the-product-you-use' },
  { t: "How Heat Stress Damages Bermuda and St Augustine", h: '/blogs/how-heat-stress-damages-bermuda-and-st-augustine' },
  { t: "How Poor Soil Structure Leads to Weeds and Thin Grass", h: '/blogs/how-poor-soil-structure-leads-to-weeds-and-thin-grass' },
];
const s3 = [
  { t: "Life Cycle Why Breaking Reproduction Is the Key to Control", h: '/blogs/life-cycle-why-breaking-reproduction-is-the-key-to-control' },
  { t: "Micronutrients and Soil Health the Missing Piece in Most Lawn Programs", h: '/blogs/micronutrients-and-soil-health-the-missing-piece-in-most-lawn-programs' },
  { t: "Spring Lawn Treatments the Most Important Application of the Year", h: '/blogs/spring-lawn-treatments-the-most-important-application-of-the-year' },
  { t: "The Complete Year Round Lawn Treatment Schedule", h: '/blogs/the-complete-year-round-lawn-treatment-schedule' },
  { t: "How to Measure Your Lawn Accurately Before Any Treatment and Why Most Homeowners Get It Wrong", h: '/blogs/how-to-measure-your-lawn-accurately-before-any-treatment-and-why-most-homeowners-get-it-wrong' },
  { t: "How Professional Lawn Care Creates a Healthier Stronger Yard", h: '/blogs/how-professional-lawn-care-creates-a-healthier-stronger-yard' },
  { t: "Why Seasonal Lawn Treatments Matter for a Healthy Yard", h: '/blogs/why-seasonal-lawn-treatments-matter-for-a-healthy-yard' },
  { t: "How Proper Watering Supports Every Lawn Treatment You Apply", h: '/blogs/how-proper-watering-supports-every-lawn-treatment-you-apply' },
  { t: "How Soil Health Impacts Every Lawn Treatment You Apply", h: '/blogs/how-soil-health-impacts-every-lawn-treatment-you-apply' },
  { t: "How Mowing Habits Influence Lawn Health More Than Most Homeowners Realize", h: '/blogs/how-mowing-habits-influence-lawn-health-more-than-most-homeowners-realize' },
  { t: "How Insects Impact Lawn Health and Why Early Detection Matters", h: '/blogs/how-insects-impact-lawn-health-and-why-early-detection-matters' },
  { t: "How Thatch Buildup Affects Lawn Health and When to Remove It", h: '/blogs/how-thatch-buildup-affects-lawn-health-and-when-to-remove-it' },
  { t: "How Shade Affects Lawn Growth and What Homeowners Can Do About It", h: '/blogs/how-shade-affects-lawn-growth-and-what-homeowners-can-do-about-it' },
  { t: "Why Soil Compaction Hurts Lawn Health and How to Fix It", h: '/blogs/why-soil-compaction-hurts-lawn-health-and-how-to-fix-it' },
  { t: "Why Grass Type Matters and How Choosing the Right One Improves Lawn Performance", h: '/blogs/why-grass-type-matters-and-how-choosing-the-right-one-improves-lawn-performance' },
  { t: "How Temperature Swings Affect Lawn Growth and Seasonal Performance", h: '/blogs/how-temperature-swings-affect-lawn-growth-and-seasonal-performance' },
  { t: "How Soil Ph Affects Lawn Health and Why Balancing It Improves Every Treatment", h: '/blogs/how-soil-ph-affects-lawn-health-and-why-balancing-it-improves-every-treatment' },
  { t: "How Mulching vs Bagging Affects Lawn Health and When to Choose Each Method", h: '/blogs/how-mulching-vs-bagging-affects-lawn-health-and-when-to-choose-each-method' },
  { t: "How Watering Schedules Change By Season and Why Timing Matters", h: '/blogs/how-watering-schedules-change-by-season-and-why-timing-matters' },
  { t: "How Foot Traffic Impacts Lawn Health and How to Protect High Use Areas", h: '/blogs/how-foot-traffic-impacts-lawn-health-and-how-to-protect-high-use-areas' },
  { t: "How Wind Sun and Weather Exposure Affect Lawn Health More Than Most Homeowners Realize", h: '/blogs/how-wind-sun-and-weather-exposure-affect-lawn-health-more-than-most-homeowners-realize' },
  { t: "How Soil Moisture Levels Influence Lawn Health and Why Consistency Matters", h: '/blogs/how-soil-moisture-levels-influence-lawn-health-and-why-consistency-matters' },
  { t: "Why North Texas Lawns Struggle and How Professional Treatments Fix It", h: '/blogs/why-north-texas-lawns-struggle-and-how-professional-treatments-fix-it' },
  { t: "The Real Reason Your Lawn Never Gets Thick", h: '/blogs/the-real-reason-your-lawn-never-gets-thick' },
  { t: "How to Keep Your Lawn Green in Extreme Texas Heat", h: '/blogs/how-to-keep-your-lawn-green-in-extreme-texas-heat' },
  { t: "Why Your Lawn Turns Brown Even When You Water Properly", h: '/blogs/why-your-lawn-turns-brown-even-when-you-water-properly' },
  { t: "The Complete North Texas Lawn Care Schedule", h: '/blogs/the-complete-north-texas-lawn-care-schedule' },
  { t: "The Ideal Watering Schedule for North Texas Lawns", h: '/blogs/the-ideal-watering-schedule-for-north-texas-lawns' },
  { t: "How to Tell If Your Lawn Is Underwatered Or Overwatered", h: '/blogs/how-to-tell-if-your-lawn-is-underwatered-or-overwatered' },
  { t: "Why Your Lawn Struggles After Heavy Rain Or Poor Drainage", h: '/blogs/why-your-lawn-struggles-after-heavy-rain-or-poor-drainage' },
  { t: "How to Protect Your Lawn During Drought Restrictions", h: '/blogs/how-to-protect-your-lawn-during-drought-restrictions' },
  { t: "Why Grass Thins Out in Shade and What You Can Actually Do About It", h: '/blogs/why-grass-thins-out-in-shade-and-what-you-can-actually-do-about-it' },
  { t: "How Trees Compete With Your Lawn for Water and Nutrients", h: '/blogs/how-trees-compete-with-your-lawn-for-water-and-nutrients' },
  { t: "Why Some Areas of Your Lawn Stay Green While Others Die Off", h: '/blogs/why-some-areas-of-your-lawn-stay-green-while-others-die-off' },
  { t: "How Microclimates Affect Lawn Color Growth and Stress", h: '/blogs/how-microclimates-affect-lawn-color-growth-and-stress' },
  { t: "Why Soil Compaction Happens Even If You Do Aerate", h: '/blogs/why-soil-compaction-happens-even-if-you-do-aerate' },
  { t: "How Soil Type Affects Lawn Performance in North Texas", h: '/blogs/how-soil-type-affects-lawn-performance-in-north-texas' },
  { t: "Topdressing vs Soil Amendments What Is the Difference", h: '/blogs/topdressing-vs-soil-amendments-what-is-the-difference' },
  { t: "Why Organic Matter Matters for Lawn Health", h: '/blogs/why-organic-matter-matters-for-lawn-health' },
  { t: "Why Some Lawns Hold Color Longer Than Others", h: '/blogs/why-some-lawns-hold-color-longer-than-others' },
  { t: "Why Some Lawns Green Up Faster in Spring Than Others", h: '/blogs/why-some-lawns-green-up-faster-in-spring-than-others' },
  { t: "Why Some Lawns Stay Thick All Year While Others Constantly Thin Out", h: '/blogs/why-some-lawns-stay-thick-all-year-while-others-constantly-thin-out' },
  { t: "Why Some Lawns Recover Faster After Stress Than Others", h: '/blogs/why-some-lawns-recover-faster-after-stress-than-others' },
  { t: "Why Some Lawns Handle Foot Traffic Better Than Others", h: '/blogs/why-some-lawns-handle-foot-traffic-better-than-others' },
  { t: "Why Some Lawns Resist Drought Better Than Others", h: '/blogs/why-some-lawns-resist-drought-better-than-others' },
  { t: "Why Some Lawns Stay Green Longer Into Fall Than Others", h: '/blogs/why-some-lawns-stay-green-longer-into-fall-than-others' },
  { t: "Why Some Lawns Bounce Back Faster After Winter Than Others", h: '/blogs/why-some-lawns-bounce-back-faster-after-winter-than-others' },
  { t: "Why Some Lawns Stay Thick Through Summer While Others Thin Out", h: '/blogs/why-some-lawns-stay-thick-through-summer-while-others-thin-out' },
  { t: "Why Some Lawns Stay Green During Heat Waves While Others Collapse", h: '/blogs/why-some-lawns-stay-green-during-heat-waves-while-others-collapse' },
  { t: "Why Some Lawns Stay Healthy During Heavy Rain While Others Fall Apart", h: '/blogs/why-some-lawns-stay-healthy-during-heavy-rain-while-others-fall-apart' },
  { t: "How Grass Recovers From Stress", h: '/blogs/how-grass-recovers-from-stress' },
  { t: "Why Your Grass Is Turning Brown Overnight Top Causes Explained", h: '/blogs/why-your-grass-is-turning-brown-overnight-top-causes-explained' },
];
const s4 = [
  { t: "How Lawn Diseases Develop and Why Early Treatment Is Critical", h: '/blogs/how-lawn-diseases-develop-and-why-early-treatment-is-critical' },
  { t: "How to Identify the Most Common Lawn Diseases in North Texas", h: '/blogs/how-to-identify-the-most-common-lawn-diseases-in-north-texas' },
  { t: "Brown Spots vs Yellow Spots What Your Lawn Is Really Telling You", h: '/blogs/brown-spots-vs-yellow-spots-what-your-lawn-is-really-telling-you' },
  { t: "How to Tell If Your Lawn Has a Fungus Or Just Heat Stress", h: '/blogs/how-to-tell-if-your-lawn-has-a-fungus-or-just-heat-stress' },
  { t: "The Early Warning Signs of Lawn Disease Most Homeowners Miss", h: '/blogs/the-early-warning-signs-of-lawn-disease-most-homeowners-miss' },
  { t: "Brown Patch Fungus Causes Symptoms and Fastest Treatment Options", h: '/blogs/brown-patch-fungus-causes-symptoms-and-fastest-treatment-options' },
  { t: "Dollar Spot Disease How to Identify and Stop It Before It Spreads", h: '/blogs/dollar-spot-disease-how-to-identify-and-stop-it-before-it-spreads' },
  { t: "Gray Leaf Spot Why It Explodes in Summer and How to Control It", h: '/blogs/gray-leaf-spot-why-it-explodes-in-summer-and-how-to-control-it' },
  { t: "Rust Fungus in Lawns Why It Happens and the Best Ways to Treat It", h: '/blogs/rust-fungus-in-lawns-why-it-happens-and-the-best-ways-to-treat-it' },
  { t: "Take All Root Rot the Silent Lawn Killer and How to Fight It", h: '/blogs/take-all-root-rot-the-silent-lawn-killer-and-how-to-fight-it' },
  { t: "Summer Lawn Diseases Why They Spread Faster in North Texas Heat", h: '/blogs/summer-lawn-diseases-why-they-spread-faster-in-north-texas-heat' },
  { t: "Why Lawn Fungus Keeps Coming Back the Hidden Causes Most People Overlook", h: '/blogs/why-lawn-fungus-keeps-coming-back-the-hidden-causes-most-people-overlook' },
  { t: "How Watering Mistakes Lead to Lawn Fungus and How to Fix Them", h: '/blogs/how-watering-mistakes-lead-to-lawn-fungus-and-how-to-fix-them' },
  { t: "How Mowing Habits Can Trigger Lawn Disease and How to Prevent It", h: '/blogs/how-mowing-habits-can-trigger-lawn-disease-and-how-to-prevent-it' },
  { t: "The Role of Soil Health in Preventing Lawn Disease", h: '/blogs/the-role-of-soil-health-in-preventing-lawn-disease' },
  { t: "How Shade and Poor Airflow Create the Perfect Conditions for Lawn Fungus", h: '/blogs/how-shade-and-poor-airflow-create-the-perfect-conditions-for-lawn-fungus' },
  { t: "Why Some Lawns Get Fungus and Others Don T Even With the Same Care Routine", h: '/blogs/why-some-lawns-get-fungus-and-others-don-t-even-with-the-same-care-routine' },
  { t: "The Difference Between Lawn Fungus and Drought Stress and Why Homeowners Mix Them Up", h: '/blogs/the-difference-between-lawn-fungus-and-drought-stress-and-why-homeowners-mix-them-up' },
  { t: "How Humidity Supercharges Lawn Fungus in North Texas", h: '/blogs/how-humidity-supercharges-lawn-fungus-in-north-texas' },
  { t: "Why Fungus Spreads Faster in St Augustine Than Bermuda Or Zoysia", h: '/blogs/why-fungus-spreads-faster-in-st-augustine-than-bermuda-or-zoysia' },
  { t: "Why Fungus Spreads After Rain Even When You Didn T Water Too Much", h: '/blogs/why-fungus-spreads-after-rain-even-when-you-didn-t-water-too-much' },
  { t: "Why Fungus Returns in the Same Spots Every Year and How to Break the Cycle", h: '/blogs/why-fungus-returns-in-the-same-spots-every-year-and-how-to-break-the-cycle' },
  { t: "How Lawn Fungus Weakens Roots Before You Ever See Damage", h: '/blogs/how-lawn-fungus-weakens-roots-before-you-ever-see-damage' },
  { t: "Why Lawn Fungus Spreads Overnight and What That Really Means", h: '/blogs/why-lawn-fungus-spreads-overnight-and-what-that-really-means' },
  { t: "The Real Reason Fungus Keeps Killing the Same Grass Type in Your Yard", h: '/blogs/the-real-reason-fungus-keeps-killing-the-same-grass-type-in-your-yard' },
  { t: "How Lawn Fungus Survives Winter and Comes Back Stronger in Spring", h: '/blogs/how-lawn-fungus-survives-winter-and-comes-back-stronger-in-spring' },
  { t: "Why Fungus Treatments Fail Even When You Apply Them Correctly", h: '/blogs/why-fungus-treatments-fail-even-when-you-apply-them-correctly' },
  { t: "How Lawn Fungus Spreads Through Your Yard and How to Stop It From Moving", h: '/blogs/how-lawn-fungus-spreads-through-your-yard-and-how-to-stop-it-from-moving' },
  { t: "Why Lawn Fungus Hits New Sod So Easily and How to Protect Fresh Installs", h: '/blogs/why-lawn-fungus-hits-new-sod-so-easily-and-how-to-protect-fresh-installs' },
  { t: "Why Some Lawns Recover From Fungus and Others Don T Even With the Same Treatment", h: '/blogs/why-some-lawns-recover-from-fungus-and-others-don-t-even-with-the-same-treatment' },
];
const s5 = [
  { t: "How to Stop Weeds in Flower Beds in North Texas", h: '/blogs/how-to-stop-weeds-in-flower-beds-in-north-texas' },
  { t: "Best Pre Emergent for Flower Beds in Texas Heat", h: '/blogs/best-pre-emergent-for-flower-beds-in-texas-heat' },
  { t: "Post Emergent Weed Control for Flower Beds What Actually Works", h: '/blogs/post-emergent-weed-control-for-flower-beds-what-actually-works' },
  { t: "Why Hand Pulling Weeds Does Not Work in Flower Beds", h: '/blogs/why-hand-pulling-weeds-does-not-work-in-flower-beds' },
  { t: "How to Prevent Nutgrass in Flower Beds in North Texas", h: '/blogs/how-to-prevent-nutgrass-in-flower-beds-in-north-texas' },
  { t: "Safe Weed Control for Flower Beds Around Shrubs and Ornamentals", h: '/blogs/safe-weed-control-for-flower-beds-around-shrubs-and-ornamentals' },
  { t: "Seasonal Weed Control Schedule for Flower Beds in Arlington Texas", h: '/blogs/seasonal-weed-control-schedule-for-flower-beds-in-arlington-texas' },
  { t: "Why Your Flower Beds Keep Getting Weeds After Mulching", h: '/blogs/why-your-flower-beds-keep-getting-weeds-after-mulching' },
  { t: "How to Keep Rock Beds Weed Free All Year", h: '/blogs/how-to-keep-rock-beds-weed-free-all-year' },
  { t: "The Best Weed Killers for Flower Beds What Is Safe and What Is Not", h: '/blogs/the-best-weed-killers-for-flower-beds-what-is-safe-and-what-is-not' },
  { t: "How to Prevent Weeds in Newly Installed Flower Beds", h: '/blogs/how-to-prevent-weeds-in-newly-installed-flower-beds' },
  { t: "Landscape Fabric vs No Fabric What Works in Texas Flower Beds", h: '/blogs/landscape-fabric-vs-no-fabric-what-works-in-texas-flower-beds' },
  { t: "How to Control Broadleaf Weeds in Flower Beds", h: '/blogs/how-to-control-broadleaf-weeds-in-flower-beds' },
  { t: "How to Control Grassy Weeds in Flower Beds", h: '/blogs/how-to-control-grassy-weeds-in-flower-beds' },
  { t: "Why Flower Beds Get So Many Weeds in North Texas", h: '/blogs/why-flower-beds-get-so-many-weeds-in-north-texas' },
  { t: "The Best Pre Emergent for Flower Beds Safe for Ornamentals", h: '/blogs/the-best-pre-emergent-for-flower-beds-safe-for-ornamentals' },
];

export default function BlogIndexClient(){
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 80 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 820 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>📚 Lawn &amp; Pest Tips • North Texas</span>
            <h1>The Hamann <span className="headline-3d">Blog</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 0' }}>Straight answers on lawn care, weeds, mosquitoes, fleas &amp; ticks, and lawn disease — written for North Texas homeowners.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">

        <h2 className="bi-silo">Mosquito Control</h2>
        <div className="bi-grid">
          {s0.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>

        <h2 className="bi-silo">Flea &amp; Tick Control</h2>
        <div className="bi-grid">
          {s1.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>

        <h2 className="bi-silo">Weed Control &amp; Fertilizer</h2>
        <div className="bi-grid">
          {s2.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>

        <h2 className="bi-silo">Lawn Health &amp; Care</h2>
        <div className="bi-grid">
          {s3.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>

        <h2 className="bi-silo">Lawn Disease &amp; Fungus</h2>
        <div className="bi-grid">
          {s4.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>

        <h2 className="bi-silo">Flower-Bed Weed Control</h2>
        <div className="bi-grid">
          {s5.map((p) => (<a key={p.h} href={p.h} className="bi-card"><h3>{p.t}</h3><span>Read more &rarr;</span></a>))}
        </div>
        </div>
      </section>
    </main>
  );
}
