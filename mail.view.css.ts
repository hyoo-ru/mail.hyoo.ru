namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $hyoo_mail, {
		
		Folders: {
			
			flex: {
				basis: rem(20),
			},
			
		},
		
		Folder_page: {
			
			flex: {
				basis: rem(20),
			},
			
		},
		
		Mail_page: {
			
			flex: {
				basis: rem(40),
				grow: 1,
			},
			
			Body_content: {
				padding: 0,
				flex: {
					grow: 0,
					basis: 'auto',
				},
			},
			
		},
		
		Mail_head: {
			justifyContent: 'space-between',
		},
		
		Mail_body: {
			padding: $mol_gap.block,
		},
		
		Reply: {
			alignItems: 'flex-end',
		},
		
	} )
	
}
