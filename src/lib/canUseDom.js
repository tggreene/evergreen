export default function canUseDom() {
  return typeof window !== 'undefined' && window.document
}
