'use babel';

import IndobetSitusSlotTerpercayaView from './indobet-situs-slot-terpercaya-view';
import { CompositeDisposable } from 'atom';

export default {

  indobetSitusSlotTerpercayaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.indobetSitusSlotTerpercayaView = new IndobetSitusSlotTerpercayaView(state.indobetSitusSlotTerpercayaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.indobetSitusSlotTerpercayaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'indobet-situs-slot-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.indobetSitusSlotTerpercayaView.destroy();
  },

  serialize() {
    return {
      indobetSitusSlotTerpercayaViewState: this.indobetSitusSlotTerpercayaView.serialize()
    };
  },

  toggle() {
    console.log('IndobetSitusSlotTerpercaya was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
