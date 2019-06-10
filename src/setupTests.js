import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import 'jest-styled-components';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });
