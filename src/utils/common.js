import {
  ERROR_MSG_TYPE,
  INFO_MSG_TYPE,
  SUCCESS_MSG_TYPE,
  WARNING_MSG_TYPE,
} from "../constants/dataKey";
import { message } from "antd";

export const displayMessage = function (type, msg) {
  if (type === SUCCESS_MSG_TYPE) message.success(msg);
  else if (type === INFO_MSG_TYPE) message.info(msg);
  else if (type === WARNING_MSG_TYPE) message.warning(msg);
  else if (type === ERROR_MSG_TYPE) message.error(msg);
};
