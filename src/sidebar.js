/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
    PluginSidebar,
    PluginSidebarMoreMenuItem,
} = wp.editPost;

const { registerPlugin } = wp.plugins;

const Component = () => (
	<Fragment>
		<PluginSidebarMoreMenuItem
			target="gutenberg-boilerplate-sidebar"
		>
			{ __( 'Gutenberg Boilerplate' ) }
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="gutenberg-boilerplate-sidebar"
			title={ __( 'Gutenberg Boilerplate' ) }
		>
			<h2>{ __( 'Hello World!' ) }</h2>
		</PluginSidebar>
	</Fragment>
);

registerPlugin( 'gutenberg-boilerplate', {
	icon: 'admin-site',
	render: Component,
} );