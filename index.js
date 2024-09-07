(async function (Scratch) {
	var values = {};
	Scratch.translate.setup({
		// empty yet
	})
	class AB4093sToolBox {
		getInfo() {
			return {
				id: 'ab4093stool',
				name: "AB4093's Toolbox",
				menus: {
					boolean: {
						items: [
							{text:Scratch.translate("true"),value:"true"},
							{text:Scratch.translate("false"),value:"false"}
						]
					},
				},
				blocks: [
					{
						opcode: 'boolean',
						blockType: Scratch.BlockType.BOOLEAN,
						text: Scratch.translate('[B]'),
						arguments: {
							B: {
								menu: "boolean",
								defaultValue: "true",
								type: Scratch.ArgumentType.STRING,
							}
						}
					},
					{
						opcode: 'ifThenElseReporter',
						blockType: Scratch.BlockType.REPORTER,
						text: Scratch.translate('if [BO] then [A] else [B]'),
						arguments: {
							BO: {
								type: Scratch.ArgumentType.BOOLEAN,
							},
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'hello'
							},
							B: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'world'
							}
						}
					},
					{
						opcode: 'newLine',
						blockType: Scratch.BlockType.REPORTER,
						text: Scratch.translate('new line'),
					},
					{
						opcode: 'tab',
						blockType: Scratch.BlockType.REPORTER,
						text: Scratch.translate('tab'),
					},
					{
						opcode: 'ifChanged',
						blockType: Scratch.BlockType.CONDITIONAL,
						isEdgeActivated: false,
						text: Scratch.translate('if [INPUT] was changed - ID #[ID]'),
						arguments: {
							INPUT: {
								type: null // reporter
							},
							ID: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 1
							},
						}
					},
				]
			};
		}
		boolean(args) {
			return Scratch.Cast.toBoolean(args.B);
		}
		ifThenElseReporter(args) {
			return args.BO ? args.A : args.B;
		}
		newLine() {return "\n";}
		tab() {return "\t";}
		ifChanged(args) {
			var id = args.IO;
			if (!values[id]) {
				values[id] = Scratch.Cast.toString(args.INPUT);
			}
			if (values[id] == args.INPUT) return false
			else {
				values[id] = args.INPUT
				return true
			}
		}
	}
	Scratch.extensions.register(new AB4093sToolBox());
})(Scratch);
