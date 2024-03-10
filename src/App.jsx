import {isMobile} from 'react-device-detect';

export default function App() {
  const renderContent = () => {
    if (isMobile) {
      return <div> This content is available only on mobile</div>
    }
    return <div> ...content </div>
  }

  return renderContent();
}

