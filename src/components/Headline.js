import Component from "../core/component";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /* html */ `
      <h1>
        <span>OMDb API<br /></span>
        THE OPEN<br />
        MOVIE DATABASE<br />
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information,
        all content and images on the site are contributed and maintained by our users.<br />
        If you find this service useful, please consider making a one-time donation or become a patron.
      </p>
    `;
  }
}
