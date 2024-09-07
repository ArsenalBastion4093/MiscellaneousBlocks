(async function (Scratch) {
	try { 
		Scratch.translate.setup(await fetch("https://raw.githubusercontent.com/ArsenalBastion4093/MiscellaneousBlocks/main/translation.json").then(r => r.json()))
	} catch(e) {
		Scratch.translate.setup(await fetch("https://mirror.ghproxy.com/https://raw.githubusercontent.com/ArsenalBastion4093/MiscellaneousBlocks/main/translation.json").then(r => r.json()).catch(()=>{}))
	}
	class AB4093sToolBox {
		getInfo() {
			return {
				id: 'ab4093stool',
				name: 'AB4093's Toolbox',
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
			if (UsernameLgeal(args.USER)) return JSON.stringify(await userdata(args.USER))
			else return null;
		}
	}
	Scratch.extensions.register(new TETRIOSTATS());
})();
