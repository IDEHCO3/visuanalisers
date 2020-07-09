<script>
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim
  } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import Fab, { Icon } from "@smui/fab";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";
  import MapOl from "./MapOl.svelte";
  import BaseLayer from "./BaseLayer.svelte";
  let dialogBaseLayer = null;
  let clicked = "nothing yet";
  let myDrawer;
  let myDrawerOpen = false;
  let active = "Gray Kittens";
  let myDrawer2;
  let myDrawer2Open = true;
  let active2 = "Inbox";
  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }
  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
  }
</script>

<style>
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 0;
  }
  * :global(.mdc-drawer--modal, .mdc-drawer-scrim) {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>

<MapOl />
<BaseLayer bind:dialog={dialogBaseLayer} />
<Drawer variant="dismissible" bind:this={myDrawer2} bind:open={myDrawer2Open}>

  <Content>
    <List>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Esconder')}
        activated={active2 === 'Star'}>
        <Graphic class="material-icons" aria-hidden="true">
          chevron_left
        </Graphic>
        <Text>Esconder</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => dialogBaseLayer.open()}
        activated={active2 === 'Inbox'}>
        <Graphic class="material-icons" aria-hidden="true">layers</Graphic>
        <Text>Camada base</Text>
      </Item>

      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Sent Mail')}
        activated={active2 === 'Sent Mail'}>
        <Graphic class="material-icons" aria-hidden="true">send</Graphic>
        <Text>Sent Mail</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Drafts')}
        activated={active2 === 'Drafts'}>
        <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
        <Text>Drafts</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Labels</Subheader>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Family')}
        activated={active2 === 'Family'}>
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Family</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Friends')}
        activated={active2 === 'Friends'}>
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Friends</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive2('Work')}
        activated={active2 === 'Work'}>
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Work</Text>
      </Item>
    </List>
  </Content>
</Drawer>

<Scrim />
<AppContent class="app-content">
  <main class="main-content">

    <Fab
      class="pos"
      mini={true}
      on:click={() => (myDrawer2Open = !myDrawer2Open)}>
      <Icon class="material-icons">chevron_right</Icon>
    </Fab>
    <br />
    <!--<pre class="status">Active: {active2}</pre> -->
  </main>
</AppContent>
