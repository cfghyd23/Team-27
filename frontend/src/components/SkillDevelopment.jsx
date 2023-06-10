import React from 'react'
import "./skilldevelopmentstyle.css"

const SkillDevelopment = () => {
  return (
    <div>
        <div class="course-card">
            <img src="data:image/jpeg;base64,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" alt="Course 1"></img>
            <div class="course-details">
                <h2>Financial Markets</h2>
                    <p>An overview of the ideas, methods, and institutions that permit human society to manage risks and foster enterprise.  Emphasis on financially-savvy leadership skills. Description of practices today and analysis of prospects for the future. </p>
                <a href="https://www.coursera.org/learn/financial-markets-global">Learn More</a>
            </div>
    </div>

  <div class="course-card">
    <img src="https://www.ofgad.com/wp-content/uploads/2019/05/Access-World-Leading-Research-e1560124451195.jpg" alt="Course 2"></img>
    <div class="course-details">
      <h2>Introduction to Statistics</h2>
      <p>Stanford's "Introduction to Statistics" teaches you statistical thinking concepts that are essential for learning from data and communicating insights. By the end of the course, you will be able to perform exploratory data analysis, understand key principles of sampling, and select appropriate tests of significance for multiple contexts. </p>
      <a href="https://www.coursera.org/learn/stanford-statistics">Learn More</a>
    </div>
  </div>

  <div class="course-card">
    <img src="https://www.kopykitab.com/blog/wp-content/uploads/2022/07/studying-3.jpg" alt="Course 3"></img>
    <div class="course-details">
      <h2>Stanford Introduction to Food and Health</h2>
      <p>Around the world, we find ourselves facing global epidemics of obesity, Type 2 Diabetes and other predominantly diet-related diseases. To address these public health crises, we urgently need to explore innovative strategies for promoting healthful eating. There is strong evidence that global increases in the consumption of heavily processed foods, coupled with cultural shifts away from the preparation of food in the home, have contributed to high rates of preventable, chronic disease. In this course, learners will be given the information and practical skills they need to begin optimizing the way they eat.</p>
      <a href="https://www.coursera.org/learn/food-and-health">Learn More</a>
    </div>
  </div>

  <div class="course-card">
    <img src="https://www.avanse.com/blogs/images/Planning-to-study-abroad.jpg" alt="Course 3"></img>
    <div class="course-details">
      <h2>The Science of Well-Being</h2>
      <p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>
      <a href="https://www.coursera.org/learn/the-science-of-well-beingh">Learn More</a>
    </div>
  </div>

  </div>
  )
}

export default SkillDevelopment