import { loadFont as loadSerif } from '@remotion/google-fonts/CormorantGaramond';
import { loadFont as loadSans } from '@remotion/google-fonts/Inter';

export const serif = loadSerif('normal', { weights: ['600', '700'], subsets: ['latin'] }).fontFamily;
export const sans = loadSans('normal', { weights: ['300', '400', '600', '700'], subsets: ['latin'] }).fontFamily;
