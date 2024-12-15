import debounce from './debounce.js';
export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 20);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('active');
      }
    });
  }

  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
  }
}
