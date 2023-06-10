import React from 'react'
import "./faq.css"

const FAQ = () => {
  return (
    <div class='faq'>
    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">FAQ</p>
  <input id='faq-a' type='checkbox'></input>
    <label for='faq-a'>
        <p class="faq-heading">How do I create a budget and manage my expenses?</p>
             <div class='faq-arrow'></div>
        <p class="faq-text">To create a budget, track your income and expenses, prioritize essential expenses, set savings goals, and adjust spending habits accordingly. Various budgeting apps and tools can help with this process. Saving money involves strategies like automating savings, cutting unnecessary expenses, and finding ways to increase income. Opening a bank account typically requires identification documents and visiting a bank branch or completing an online application. Building credit involves responsible borrowing and repayment, such as using a credit card and paying bills on time.</p>
    </label>
  <input id='faq-b' type='checkbox'></input>
  <label for='faq-b'>
    <p class="faq-heading">What should I consider when searching for and renting an apartment?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">When searching for an apartment, consider factors like location, rental cost, amenities, and lease terms. Review the lease agreement carefully before signing and understand the rights and responsibilities as a tenant, including maintenance obligations and notice periods for moving out. Contact local utility providers to set up services like electricity, water, and internet. Some may require a security deposit or credit check.</p>
  </label>
  <input id='faq-c' type='checkbox'></input>
  <label for='faq-c'>
    <p class="faq-heading">How do I navigate health insurance plans and understand the coverage?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Understanding health insurance involves reviewing available plans, comparing coverage options, and considering costs like premiums, deductibles, and copayments. Enroll in a plan through an employer, government programs, or individual marketplaces. Find a primary care physician by asking for recommendations, checking with insurance providers, or searching online directories. For medical emergencies, dial emergency services and be aware of nearby urgent care centers or hospitals.</p>
  </label>
  <input id='faq-d' type='checkbox'></input>
  <label for='faq-d'>
    <p class="faq-heading">How can I plan and prepare meals on a budget?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Plan meals by creating a weekly menu, considering nutritional needs and dietary preferences. Learn basic cooking skills like chopping, sautéing, and baking. Simple recipes for beginners include stir-fries, pasta dishes, and one-pot meals. Make a grocery list based on planned meals and budget constraints. Ensure food safety by properly storing, handling, and cooking ingredients.</p>
  </label>
  <input id='faq-e' type='checkbox'></input>
  <label for='faq-e'>
    <p class="faq-heading">What are the key measures to ensure personal safety in my new living environment?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Maintain personal safety by being aware of your surroundings, using well-lit and populated areas, and letting others know your whereabouts. Protect yourself from identity theft and online scams by safeguarding personal information, using secure passwords, and avoiding suspicious websites or emails. Enhance home security by installing deadbolt locks, using timers for lights when away, and not sharing personal details with strangers.</p>
  </label>
  <input id='faq-f' type='checkbox'></input>
  <label for='faq-f'>
    <p class="faq-heading">How can I effectively manage my time and balance various responsibilities?</p>
    <div class='faq-arrow'></div>
      <p class="faq-text">Manage time effectively by prioritizing tasks, creating schedules or to-do lists, and setting realistic goals. Stay organized by decluttering spaces, utilizing calendars or productivity apps, and breaking tasks into smaller, manageable steps. Avoid procrastination by setting deadlines, eliminating distractions, and seeking accountability through study groups or productivity partners.</p>
  </label>
   </div>
  )
}

export default FAQ