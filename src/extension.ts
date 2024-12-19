import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "llm-clipboard.copy",
    async (resource: vscode.Uri) => {
      if (!resource) {
        return;
      }

      const fileName = path.basename(resource.fsPath);
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.replace(
            editor.selection,
            fileName + "\n" + "${clipboard}"
          );
        });
      } else {
        // If there is no active editor, copy to clipboard
        await vscode.env.clipboard.writeText(fileName + "\n" + "${clipboard}");
        vscode.window.showInformationMessage(
          `Copied file name "${fileName}" to clipboard.`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
