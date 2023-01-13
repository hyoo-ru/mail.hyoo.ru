namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $hyoo_mail, {
		
		Folders: {
			
			flex: {
				basis: rem(20),
			},
			
		},
		
		Folders_links: {
			padding: $mol_gap.block,
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
			
			Body: {
				padding: 0,
				flex: {
					grow: 0,
					basis: 'auto',
				},
			},
			
		},
		
		Folder_mails: {
			padding: $mol_gap.block,
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
