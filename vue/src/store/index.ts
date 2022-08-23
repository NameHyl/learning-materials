import useHomeStore from './modules/home';
const o: { [key: string]: any } = {};
export default function useStore() {
  if (!o.home) o.home = useHomeStore();
  return o;
}
