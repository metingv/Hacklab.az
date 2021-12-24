import "./Section4.scss";
import $ from "jquery";

export default function Section4() {
  return (
    <div className="Section4" id="Section4">
      <div className="div1">
        <span>Yeniliklərdən xəbərdar olun </span>
        <form
          action="https://hacklab.us20.list-manage.com/subscribe/post?u=c5552794a2da48966cb2bb268&amp;id=42718a56f8"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="form-action"
        >
          <input
            type="text"
            placeholder="Sizin e-poçt ünvanınız"
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
          />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_c5552794a2da48966cb2bb268_42718a56f8"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="last-li">
            <button
              type="submit"
              name="subscribe"
              value="Subscribe"
              class="buttonfx curtainup"
            >
              ABUNƏ OLMAQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

