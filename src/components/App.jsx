import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, goodState] = useState(0);
  const [neutral, neutralState] = useState(0);
  const [bad, badState] = useState(0);
  
  const onClickBtn = e => {
        switch(e.target.name){
        case 'good':
          goodState(prev => good + 1)
          break;

        case 'neutral':
          neutralState(prev => neutral + 1)
          break;

        case 'bad':
          badState(prev => bad + 1)
          break;
          default:
        }
      };

  const countTotalFeedback = () => 
    Number(good + neutral + bad);
  

  const countPositiveFeedbackPercentage = () => 
    Math.round((good / countTotalFeedback()) * 100);

  
    return(
      <>
      <Section title='Please leave Feedback'>
        <FeedbackOption
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onClickBtn} />

      </Section>
      <Section title='Statistics'>
      {countTotalFeedback() > 0 ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentag={countPositiveFeedbackPercentage()}
        />
      ) : (<Notification message="There is no feedback" />)}   
      
      </Section>
      </>
    )
  

}