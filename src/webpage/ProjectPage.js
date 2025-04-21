// web/src/webpage/ProjectPage.js
// import SampleOperatingAgreement from './sections/SampleOperatingAgreement';
// import WorkflowVisualization from './sections/WorkflowVisualization';
// import DataInsights from './sections/DataInsights'; 
// import PlatformSection from './sections/PlatformSection';
// import DatasetCard from './sections/DatasetCard';
// import BottomSections from './sections/BottomSections';
import OverviewSection from './sections/OverviewSection';
import Header from './sections/Header';
import CognitiveEvalFramework from './sections/CognitiveEvalFramework'
import CognitiveScienceExperiements from './sections/CognitiveScienceExperiements'
import CognitiveEvalExperimentalRobustness from './sections/CognitiveEvalExperimentalRobustness'
import CognitiveEvalDemo from './sections/CognitiveEvalDemo'

const ProjectPage = () => {
  return (
    <>
      <Header />
      <OverviewSection />
      <CognitiveEvalFramework />
      <CognitiveScienceExperiements />
      <CognitiveEvalExperimentalRobustness />
      <CognitiveEvalDemo />
    </>
  );
};

export default ProjectPage;
