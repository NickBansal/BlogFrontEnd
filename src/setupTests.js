import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import 'jest-styled-components';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });
