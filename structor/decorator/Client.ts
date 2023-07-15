import DefaultPropaganda from "./DefaultPropaganda";
import HTTPFilteringPropaganda from "./HTTPFilteringPropaganda";
import StrFilteringPropaganda from "./StrFilteringPropaganda";

let propaganda = new DefaultPropaganda();
propaganda = new HTTPFilteringPropaganda(propaganda);
propaganda = new StrFilteringPropaganda(propaganda);

propaganda.addMsg("선전 메시지");
propaganda.addMsg("http://선전 메시지.com");
propaganda.addMsg("폭풍속으로...");
