namespace $.$$ {
	
	const Mail = $mol_data_record({
		from: $mol_data_string,
		to: $mol_data_array( $mol_data_string ),
		cc: $mol_data_array( $mol_data_string ),
		subject: $mol_data_string,
		body: $mol_data_string,
	})
	
	const Data = $mol_data_record({
		folder: $mol_data_dict( $mol_data_array( $mol_data_string ) ),
		mail: $mol_data_dict( Mail ),
	})
	
	export class $hyoo_mail extends $.$hyoo_mail {
		
		@ $mol_mem
		data() {
			const text = this.$.$mol_fetch.text( 'hyoo/mail/data/data.json.tree' )
			const tree = this.$.$mol_tree2_from_string( text )
			const json = this.$.$mol_tree2_to_json( tree.kids[0] )
			const data = Data( json as any )
			return data
		}
		
		folder( next?: string ) {
			return this.$.$mol_state_arg.value( 'folder', next )
		}
		
		mail( next?: string ) {
			return this.$.$mol_state_arg.value( 'mail', next )
		}
		
		@ $mol_mem
		pages() {
			return [
				this.Folders(),
				... this.folder() ? [ this.Folder_page( this.folder() ) ] : [],
				... this.mail() ? [ this.Mail_page( this.mail() ) ] : [],
			]
		}
		
		@ $mol_mem
		folders_links() {
			return Object.keys( this.data().folder ).map( id => this.Folder_link( id ) )
		}
		
		@ $mol_mem_key
		folder_mails( folder: string ) {
			return this.data().folder[ folder ].map( mail => this.Mail_link( mail ) )
		}
		
		folder_title( folder: string ) {
			return folder
		}
		
		folder_arg( folder: string ) {
			return { folder, mail: null }
		}
		
		mail_arg( mail: string ) {
			return { mail }
		}
		
		mail_subject( mail: string ) {
			return this.data().mail[ mail ].subject
		}
		
		mail_from( mail: string ) {
			return this.data().mail[ mail ].from
		}
		
		mail_to( mail: string ) {
			return this.data().mail[ mail ].to.join( ', ' )
		}
		
		mail_copy( mail: string ) {
			return this.data().mail[ mail ].cc.join( ', ' )
		}
		
		mail_body( mail: string ) {
			return this.data().mail[ mail ].body
		}
		
	}
	
}
