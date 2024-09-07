(async function (Scratch) {
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
							{text:Scratch.translate("true"),value:true},
							{text:Scratch.translate("false"),value:false}
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
								defaultValue: true
							}
						}
					},
				]
			};
		}
		boolean(args) {
			return args.B;
		}
	}
	Scratch.extensions.register(new AB4093sToolBox());
})(Scratch);
