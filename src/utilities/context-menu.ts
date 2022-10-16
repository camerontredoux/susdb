import {
  MessageContextMenuType,
  UserContextMenuType,
} from "../typings/context-menu";

export class MessageContextMenu {
  constructor(options: MessageContextMenuType) {
    Object.assign(this, options);
  }
}

export class UserContextMenu {
  constructor(options: UserContextMenuType) {
    Object.assign(this, options);
  }
}
