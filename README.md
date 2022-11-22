# Progressive Web App "Emotion Dive"

This is the main repository for the PWA.

To work with this repo you will find 3 branches ``dev``, ``integration`` and ``main``.

Where: 
- ``dev``: Here is the implementation of all the frontend view and logic **WITHOUT API INTEGRATION**.
- ``integration``: When finalizing view topics on dev it is necessary to make a pull request in order to integrate the views with the API logic and resolve users flow.
- ``main``: When finalizing testing on integration this branch will contain the stable version of the app.

## Installation
For installing run the following comand:

```
npm install
```
## Execution
For execution run the following command:
```
npm run dev
```
It will run on  http://localhost:3000/ and in other networks of your net interfaces.

## Activities View
For the develop of the activities, the folder structure that is of your interest is the next:
```
src
│
├───modules
│   └───activities
│       └───TCC
│           ├───Empathy
│           │   ├───components
│           │   └───data
│           ├───SelfEfficacy
│           │   ├───components
│           │   └───data
│           ├───SelfKnowledge
│           │   ├───components
│           │   └───data
│           └───SelfRegulation
│               ├───components
│               └───data
└───styles
    └───pages
        └───activitiesTCC
```
Where all the Individual Activities ``.jsx`` will be located on the root of each cognitive competence folder ``src/modules/activities/TCC``.

The data ``.json`` will be located on the ``data`` folder and custom components of the activities will be located on ``components`` folder.

Special styles of each activity will be located on 4 ``.sass`` files:
- ``_empathy.scss``
- ``_selfEfficacy.scss``
- ``_selfKnowledge.scss``
- ``_selfRegulation.scss``

and all the styles must be inside the cognitive competence activity selector:

```sass
.SelfEfficacyActivity {
	// Generate all styles inside here
    ...
}
```
### Suggestion
There is a component named ``ActivitiesLocalizationBar`` which you can use in order to have a navbar with the logo of the cognitive competence and add a title.

Also, the following structure of your activity could be like the following example:

**Example:**

In the``SelfRegulationStrategiesActivity.jsx`` file:
```jsx
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import data from './data/SelfRegulationStrategiesData.json'

const SelfRegulationStrategiesActivity = () => {
	return (
		<div className='SelfRegulationActivity'>
			<ActivitiesLocalizationBar variant='SelfRegulation' title={data.title} />
			<main className='customStyle' >
				{/* ALL YOUR ACTIVITY WILL BE HERE  */}
            </main>
		</div>
	)
}

export default SelfRegulationStrategiesActivity

```
And in the ``_selfRegulation.scss`` file:
```sass
.SelfRegulationActivity {
	.customStyle{
        background-color: var(--secondary-100);
    }
}
```