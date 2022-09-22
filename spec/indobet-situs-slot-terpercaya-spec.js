'use babel';

import IndobetSitusSlotTerpercaya from '../lib/indobet-situs-slot-terpercaya';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('IndobetSitusSlotTerpercaya', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('indobet-situs-slot-terpercaya');
  });

  describe('when the indobet-situs-slot-terpercaya:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.indobet-situs-slot-terpercaya')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'indobet-situs-slot-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.indobet-situs-slot-terpercaya')).toExist();

        let indobetSitusSlotTerpercayaElement = workspaceElement.querySelector('.indobet-situs-slot-terpercaya');
        expect(indobetSitusSlotTerpercayaElement).toExist();

        let indobetSitusSlotTerpercayaPanel = atom.workspace.panelForItem(indobetSitusSlotTerpercayaElement);
        expect(indobetSitusSlotTerpercayaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'indobet-situs-slot-terpercaya:toggle');
        expect(indobetSitusSlotTerpercayaPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.indobet-situs-slot-terpercaya')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'indobet-situs-slot-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let indobetSitusSlotTerpercayaElement = workspaceElement.querySelector('.indobet-situs-slot-terpercaya');
        expect(indobetSitusSlotTerpercayaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'indobet-situs-slot-terpercaya:toggle');
        expect(indobetSitusSlotTerpercayaElement).not.toBeVisible();
      });
    });
  });
});
